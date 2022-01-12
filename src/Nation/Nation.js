import React, {useEffect, useState} from "react";
import './Nation.css';
import {Link} from 'react-router-dom';
import  Aos from "aos";
import "aos/dist/aos.css";

const Nation = ({navbarLightMode, nation}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const[readMoreActive, setReadMoreActive] = useState(false);

  const ReadMoreClicked = () => {
    if (!readMoreActive)
      setReadMoreActive(true);
    else
      setReadMoreActive(false);
  }

  return (
    <div data-aos={"fade-up"} className={navbarLightMode ? 'nation-container lightMode' : 'nation-container'}>
      <div className={'nation-header'}>
        <h3>{nation.title}</h3>
      </div>
      <div className={'nation-description'}>
        <p className={'leader'}><span>Leader/s:</span> {nation.leader}</p>
        <p><span>System:</span> {nation.system}</p>
        <div className={'img-container'}>
          <img src={nation.flag}/>
        </div>
        <p>{!readMoreActive ? nation.description.slice(0, 90) + '...' : nation.description}</p>
        <Link onClick={ReadMoreClicked} to={'#'}>{readMoreActive ? <a>Read less</a> : <a>Read more</a>}</Link>
      </div>
    </div>
  )
}

export default Nation;