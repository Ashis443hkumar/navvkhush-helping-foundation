import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default function Socialicons(){
  return (
    <>
      <section className="social_icons">
        <ul>
          <li><Link to=""><img src="https://cdn-icons-png.flaticon.com/128/4008/4008208.png" class="youtube" alt=""/></Link></li>
          <li><Link to="" ><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" class="linkedin" alt="" /></Link></li>
          <li><Link to="" ><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" class="instagram" alt=""/></Link></li>
          <li><Link to="" ><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" class="facebook" alt=""/></Link></li>
          <li><Link to="" ><img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" class="facebook" alt=""/></Link></li>
        </ul>
      </section>
    </>
  )
}