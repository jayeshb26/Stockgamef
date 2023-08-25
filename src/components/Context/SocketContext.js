import React, { createContext, useContext, useState, useEffect } from "react";

import io from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const newSocket = io.connect("http://139.59.88.210:5000");
    newSocket.on("connect", () => {
      console.info(`Connected [id=${newSocket.id}]`);
      newSocket.emit("join", {
        token: `Bearer ${token}`,
        gameName: "rouletteTimer40",
      }); // Replace with your authentication token
    });
    newSocket.on("res", (data) => {
      console.log("Response from server:", data);
      setSocket(data)
    });
    return () => {
      console.info(`Disconnecting [id=${newSocket.id}]`);
      newSocket.disconnect();
    };
  }, []);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
