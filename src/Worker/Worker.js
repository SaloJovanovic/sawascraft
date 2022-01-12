import React, {useEffect, useState} from "react";
import './Worker.css';
import {Link} from 'react-router-dom';
import  Aos from "aos";
import "aos/dist/aos.css";

const Worker = ({navbarLightMode, worker}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  return (
    <div data-aos={"fade-up"} className={navbarLightMode ? 'worker-container lightMode' : 'worker-container'}>
      <div className={'worker-header'}>
        <h3>{worker.name}</h3>
      </div>
      <div className={'worker-description'}>
        <p className={'job'}>{worker.job}</p>
        <div className={'img-container'}>
          <img src={worker.pfp}/>
        </div>
        <Link to={worker.link}>contact</Link>
      </div>
    </div>
  )
}

export default Worker;