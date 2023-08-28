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

  var newSocket;
  newSocket= io.connect(AppConstant.WEBSOCKET_URL);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    newSocket.on("connect", () => {
      console.info(`Connected [id=${newSocket.id}]`);
      newSocket.emit("join", {
        token: `Bearer ${token}`,
        gameName: "stockskill",
      }); // Replace with your authentication token
    });
    newSocket.on("res", (data) => {
      console.log("Response from server:", data);
      if(data.en == 'join'){
        setMainData(data);
      }else{
        setMainData(null)
      }
      setSocket(data)
    });
    // Define a custom event emitter function
    // const emitEvent = (eventName, eventData) => {
    //   if (socket) {
    //     newSocket.emit(eventName, eventData);
    //   }
    // };
    
    return () => {
      console.info(`Disconnecting [id=${newSocket.id}]`);
      newSocket.disconnect();
    };
  }, []);
  const emitEvent = (eventName, eventData) => {
    console.log('newSocket',newSocket)
    if (newSocket) {
      newSocket.emit(eventName, eventData);
    }
  };
  newSocket.on('res',(data)=>{
    console.log('afterPlaceBid',data)
    if(data && data.en == "placeBet"){
      if(data.data.result == "Place Bet Success"){
        toast.success("Place Bet Success")
      }else{
        toast.error(data.data.result)
      }
      setPlaceBid(data)
    }
  })
  const contextValue = {
    newSocket,
    mainData,
    placeBid,
    emitEvent, // Make sure to include the function in the context value
  };
  return (
    <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>
  );
};
