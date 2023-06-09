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

      </Routes>
      <Footer/>
    </>
  );
}
