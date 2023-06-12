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
import AimObjective from "./components/pages/abouts/AimObjective"
import LegalStatus from "./components/pages/abouts/LegalStatus"
import AnnualReaports from "./components/pages/abouts/AnnualReaports"
import SocialVenture from "./components/pages/abouts/SocialVenture"
import NavvkhushTeam from "./components/pages/abouts/NavvkhushTeam"
import AwardsRecognition from "./components/pages/abouts/AwardsRecognition"





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
        <Route path="/introduction" element={<Introduction/>} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/aim" element={<AimObjective/>} />
        <Route path="/legal" element={<LegalStatus/>} />
        <Route path="/annual" element={<AnnualReaports/>} />
        <Route path="/socialVenture" element={<SocialVenture/>} />
        <Route path="/navvkhushTeam" element={<NavvkhushTeam/>} />
        <Route path="/awardsRecognition" element={<AwardsRecognition/>} />
     </Route>

      <Route path="/" element={<Program/>} >
          <Route path="/butterfly" element={<Butterfly/>} />
      </Route>

      </Routes>
      <Footer/>
    </>
  );
}
