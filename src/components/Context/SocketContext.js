import React, { createContext, useContext, useState, useEffect } from "react";

import io from "socket.io-client";
import { AppConstant } from "../../AppConstant";
import { toast } from "react-toastify";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [mainData, setMainData] = useState(null);
  const [placeBid, setPlaceBid] = useState(null);
  const [startGame, setStartGame] = useState();
  const [resultData, setResultData] = useState(null);
  const [statues, setStatues] = useState(1);
  const [betClose, setBetClose] = useState(false);
  const [rewardData, setRewardData] = useState(null);


  var newSocket;

  newSocket= io.connect(AppConstant.WEBSOCKET_URL);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    newSocket.on("connect", () => {
      newSocket.emit("join", {
        token: `Bearer ${token}`,
        gameName: "stockskill",
      }); // Replace with your authentication token
    });

    newSocket.on("res", (data) => {
      console.log("Response from server:", data);
      if(data.en == 'join'){
        setMainData(data);
        setStatues(data.data.status)
      }
      else if(data.en == "game start"){
        setStartGame(data.status);
        setStatues(data.status);
        getNewGridData();
      }
      else if(data.en == 'result'){
        setResultData(data)
        setStatues(data.status);
        setBetClose(false)
      }
      else if(data.en == "bet closed"){
        setBetClose(true)
      }
      else if (data.en == "reward"){
        console.log('DATA',data)
        setRewardData(data);
        setStatues(data.status);
      }
      else{
        setMainData(null)
      }
      setSocket(data)
    });
    
    return () => {
      newSocket.disconnect();
    };
  }, []);
  const emitEvent = (eventName, eventData) => {
    if (newSocket) {
      newSocket.emit(eventName, eventData);
    }
  };
  newSocket.on('res',(data)=>{
    if(data && data.en == "placeBet"){
      console.log('afterPlaceBid',data)
      if(data.data.result == "Place Bet Success"){
        toast.success("Place Bet Success")
      }else{
        toast.error(data.data.result)
      }
      setPlaceBid(data)
    }
  })

  const getNewGridData = () =>{
    const token = localStorage.getItem("authToken");
    return newSocket.emit("getnew", {
      token: `Bearer ${token}`,
    });
  }

  const contextValue = {
    newSocket,
    mainData,
    placeBid,
    emitEvent, // Make sure to include the function in the context value
    startGame,
    resultData,
    statues,
    betClose,
    rewardData
  };
  return (
    <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>
  );
};
