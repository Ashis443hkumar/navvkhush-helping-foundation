import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"

// pages section 
import Home from "./components/pages/home/Home"
import Introduction from "./components/pages/abouts/instroduction/Introduction"
import Abouts from "./components/pages/abouts/Abouts"


import {Routes, Route} from "react-router-dom"


export default function App() {
  return (
    <>
      <Head/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/introduction" element={<Abouts/>} />
        <Route path="/introduction" element={<Introduction/>} />

        Abouts

      </Routes>
      
    </>
  );
}
