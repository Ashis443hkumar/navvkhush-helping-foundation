import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from "react-router-dom";
import Donate from "./Donate";
import HeroButton from "./heroButton/HeroButton";


export default function DonateButton() {

  const [show, setshow] = useState([true]);

  const navigate = useNavigate()


  return (
    <>
    <Donate/>

      <div className="donateButton" onClick={() =>navigate("./contact")} >
          <HeroButton  title="Donate Now" />

      </div>
     
   
    </>
  );
}
