import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Donate from "./Donate";
import HeroButton from "./heroButton/HeroButton";


export default function DonateButton() {

  const [show, setshow] = useState([true]) 

  return (
    <>
      


      <div className="donateButton" >
        <Link to="./donate">
          <HeroButton  title="Donate Now" />
        </Link>

        {/* <button onClick={() =>setshow(!show)} >
           <HeroButton title="Donate Now" />
        </button> */}

      </div>
   
    </>
  );
}
