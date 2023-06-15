import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
// common pages
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import DonateButton from "./components/common/DonateButton"


// route file import
import {Routes, Route} from "react-router-dom"

// all pages section 
import Home from "./components/pages/home/Home"

// abouts pages
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
// Dropdown menu
import Butterfly from "./components/pages/programs/Butterfly"
import Rooh from "./components/pages/programs/Rooh"
import Events from "./components/pages/programs/Events"
import ToyLibrary from "./components/pages/programs/ToyLibrary"
import SuccessStores from "./components/pages/programs/SuccessStores"

// Celebrity % Meida
import Celebrity from "./components/pages/celebrityMedia/Celebrity"
// dropdown menu
import Media from "./components/pages/celebrityMedia/Media"
import CelebritySupport from "./components/pages/celebrityMedia/CelebritySupport"

// Joins
import Joins from "./components/pages/Joins/Joins"



export default function App() {
  return (
    <>
      <Head/>
      <Header/>
      <DonateButton/>
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
        <Route path="/rooh" element={<Rooh/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/toyLibrary" element={<ToyLibrary/>} />
        <Route path="/successStores" element={<SuccessStores/>} />
     </Route>  

     <Route path="/" element={<Celebrity/>}>
         <Route path="/media" element={<Media/>} />
         <Route path="/celebritySuppor" element={<CelebritySupport/>} />
        
      </Route>

      <Route path="/joins" element={<Joins/>} />



      </Routes>
      <Footer/>
    </>
  );
}
