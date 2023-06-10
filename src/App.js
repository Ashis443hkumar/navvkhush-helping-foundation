import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
// common pages
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"

// route file import
import {Routes, Route} from "react-router-dom"

// all pages section 
import Home from "./components/pages/home/Home"

import Abouts from "./components/pages/abouts/Abouts"
// Dropdown menu
import Mission from "./components/pages/abouts/Mission"
import Introduction from "./components/pages/abouts/Introduction"

// program 
import Program from "./components/pages/programs/Program"
import Butterfly from "./components/pages/programs/Butterfly"



export default function App() {
  return (
    <>
      <Head/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />

      <Route path="/" element={<Abouts/>}>
        <Route path="/mission" element={<Mission/>} />
        <Route path="/introduction" element={<Introduction/>} />
     </Route>

      <Route path="/" element={<Program/>} >
          <Route path="/butterfly" element={<Butterfly/>} />
      </Route>

      </Routes>
      <Footer/>
    </>
  );
}
