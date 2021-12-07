import React from "react";
import "./Styles/Header.css";
import LogoLet from "../assets/Logo_let.png";
//import Clock from "./Clock"
import Clock from 'react-live-clock'
//import moment from 'moment';

function Header() {
  const fecha = new Date().toString().slice(4,16)
  //console.log(fecha)

  return (
    <section id="header">
      <img src={LogoLet} alt="Burger-Queen-Logo" id="logo2" />
      <h1 id="time">
        {fecha}
         <Clock format={"HH:mm:ss"} ticking={true} timezone={'US/Central'}/>
         
      </h1>
    </section>
  );
}

export default Header;
