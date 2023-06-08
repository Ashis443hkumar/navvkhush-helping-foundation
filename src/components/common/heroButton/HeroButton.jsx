import React from "react";
import "./style.css"
export default function HeroButton({title}) {
  return (
    <>
      <div className="heroButton">
        <button>{title}</button>
      </div>
   
    </>
  );
}
