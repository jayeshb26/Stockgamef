import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Routers from "./router/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <main className="">
        <Routers />
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
