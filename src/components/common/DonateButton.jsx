import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeroButton from "./heroButton/HeroButton";


export default function DonateButton() {
  return (
    <>
      <div className="donateButton">
        <Link to="/">
          <HeroButton title="Donate Now" />
        </Link>
      </div>
   
    </>
  );
}
