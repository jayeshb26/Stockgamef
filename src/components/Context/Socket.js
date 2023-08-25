import React from 'react'
import { useEffect } from 'react';
import io from 'socket.io-client';

const SocketComponent = () => {
    useEffect(() => {
        const token = localStorage.getItem('authToken')
        const socket = io.connect('http://139.59.88.210:5000'); // Replace with your server URL
        socket.on('connect', () => {
          console.info(`Connected [id=${socket.id}]`);
          socket.emit('join', { token: `Barrer ${token}` ,gameName:"rouletteTimer40" }); // Replace with your authentication token
        });
    
        socket.on('res', (data) => {
          console.log('Response from server:', data);
        });
    
        // Other event listeners...
    
        return () => {
          console.info(`Disconnecting [id=${socket.id}]`);
          socket.disconnect();
        };
      }, []);
  return (
    <div>Socket</div>
  )
}

export default SocketComponent;