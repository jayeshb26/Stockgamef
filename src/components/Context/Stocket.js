import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";

const SocketComponent = () => {
  const [socket, setSocket] = useState(null);
  const [messgae, setMessgae] = useState("");
  const [recivedMessage, setRecivedMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const newSocket = io("ws://139.59.88.210:5000", {
      query: { token: token, gameName: "rouletteTimer40" },
    });
    setSocket(newSocket);
    console.log("socket", socket);
    return () => {
      newSocket.disconnect();
    };
  }, []);
  useEffect(() => {
    if (socket) {
      // Listen for incoming messages
      socket.on("join", (data) => {
        console.log("data", data);
        setRecivedMessage(data.message);
      });
    }
  }, [socket]);

  return <div></div>;
};

export default SocketComponent;
