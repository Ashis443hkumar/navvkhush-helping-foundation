import React from "react";
import "./style.css"
export default function Heading({title,subtitle}) {
  return (
    <>
      <div className="heroHeading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
   
    </>
  );
}
