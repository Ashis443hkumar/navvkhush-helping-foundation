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
import NavvkhushTeam from "./components/pages/abouts/NavvkhushTeam"

// program 
import Program from "./components/pages/programs/Program"
// Dropdown menu
import Education from "./components/pages/programs/Education"
import Rooh from "./components/pages/programs/Rooh"
import WomenEmpower from "./components/pages/programs/WomenEmpower"
import ToyLibrary from "./components/pages/programs/ToyLibrary"
import Fashion from "./components/pages/programs/Fashion"

// Celebrity % Meida
import Celebrity from "./components/pages/celebrityMedia/Celebrity"
// dropdown menu
import Media from "./components/pages/celebrityMedia/Media"
import CelebritySupport from "./components/pages/celebrityMedia/CelebritySupport"
import Interships from "./components/pages/celebrityMedia/Interships"
import Volunteer from "./components/pages/celebrityMedia/Volunteer"


// Joins
import Joins from "./components/pages/Joins/Joins"
import Contact from "./components/pages/contact/Contact"
import Donate from "./components/pages/donate/Donate"
import DonateBillAddress from "./components/pages/donate/model/DonateBillAddress"


// trail 
import Portfolio from "./Portfolio/Portfolio"
import Testimonial from "./Testimonial/Testimonial"
import Slide from "./components/common/slide/Slide"

import WhomenProjects from "./components/pages/celebrityMedia/project/WhomenProjects"
import ChildProject from "./components/pages/celebrityMedia/project/ChildProject"
import MinistryProjects from "./components/pages/celebrityMedia/project/MinistryProjects"
import Sankalp from "./components/pages/celebrityMedia/project/Sankalp"



export default function App() {
  return (
    <>
      
     {/* <Testimonial/> */}
      <Head/>
      <Header/>
      {/* <Portfolio/> */}
      {/* <WhomenProjects/> */}
      <DonateButton/>

      <Routes>

        <Route path="/" element={<Home/>} />

      <Route path="/" element={<Abouts/>}>
        <Route path="/introduction" element={<Introduction/>} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/aim" element={<AimObjective/>} />
        <Route path="/legal" element={<LegalStatus/>} />
        <Route path="/annual" element={<AnnualReaports/>} />
        <Route path="/navvkhushTeam" element={<NavvkhushTeam/>} />
     </Route>


     <Route path="/" element={<Program/>} >
        <Route path="/childEducation" element={<Education/>} />
        <Route path="/rooh" element={<Rooh/>} />
        <Route path="/womenEmpower" element={<WomenEmpower/>} />
        <Route path="/toyLibrary" element={<ToyLibrary/>} />
        <Route path="/fashion" element={<Fashion/>} />
     </Route>  

     <Route path="/" element={<Celebrity/>}>
         <Route path="/media" element={<Media/>} />
         <Route path="/celebritySuppor" element={<CelebritySupport/>} />
         <Route path="/Intership" element={<Interships/>} />
         <Route path="/volunteer" element={<Volunteer/>} />
     </Route>

      <Route path="/joins" element={<Joins/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/donate" element={<Donate/>} />
      <Route path="/DonateBillAddress" element={<DonateBillAddress/>} />

      {/* projects details  */}
      <Route path="/joinsg" element={<WhomenProjects/>} />
      <Route path="/ChildProject" element={<ChildProject/>} />
      <Route path="/MinistyProjects" element={<MinistryProjects/>} />
      <Route path="/sankalp" element={<Sankalp/>} />




      </Routes>
      <Footer/>
    </>
  );
}
