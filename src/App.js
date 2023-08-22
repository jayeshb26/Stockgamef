import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Routers from './router/router';
import SocketComponent from './components/Context/Stocket';
function App() {
  return (
    <main className="">
      <Routers/>
      <SocketComponent/>
    </main>
  );
}

export default App;
