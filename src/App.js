import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Routers from "./router/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
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
