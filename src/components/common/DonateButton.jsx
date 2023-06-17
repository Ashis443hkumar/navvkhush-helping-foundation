import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from "react-router-dom";
import HeroButton from "./heroButton/HeroButton";


export default function DonateButton() {

  const [show, setshow] = useState([true]);

  const navigate = useNavigate()


  return (
    <>
      <div className="donateButton" onClick={() =>navigate("./donate")} >
          <HeroButton  title="Donate Now" />
      </div>
     
   
    </>
  );
}
