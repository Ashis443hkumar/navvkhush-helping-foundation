
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


export default function SelectOption(){
  return(
    <>
     <label class="checkbox">
          <input type="checkbox"/>
          <div class="checkbox-circle">
            <svg viewBox="0 0 52 52" class="checkmark">
              <circle fill="none" r="25" cy="26" cx="26" class="checkmark-circle"></circle>
              <path d="M16 26l9.2 8.4 17.4-21.4" class="checkmark-kick"></path>
            </svg>
          </div>
        </label>
   
    </>
  )
}