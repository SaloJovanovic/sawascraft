import React, {useEffect, useState} from "react";
import './Main.css';
import {Link} from 'react-router-dom';
import sawascraftLogo from '../images/sawacraft-logo-2.png';

const Main = ({navbarLightMode}) => {

  const[copiedText, setCopiedText] = useState(false);

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  function myFunction() {
    var copyText = document.getElementById("myInput");

    navigator.clipboard.writeText(copyText.innerText);

    if (copiedText)
      setCopiedText(false);
    else
      setCopiedText(true);
    delay(2000).then(() => {
      setCopiedText(false);
    });
  }

  return (
    <div className={navbarLightMode ? 'mainContainer lightMode' : 'mainContainer'} id={'main'}>
      <div className={'header-heading'}>
        {/*<h3 className={'details'}>Opusti se, izađi iz zone komfora, pridruži nam se, upoznaj nove ljude i spremi se za nova znanja i iskustva.</h3>*/}
        <img src={sawascraftLogo}/>
        <h3>IP ADDRESS</h3>
        <div className={copiedText ? 'copied-alert active' : 'copied-alert'}>
          <h3>Copied!</h3>
        </div>
        <div className={copiedText ? 'pointer active' : 'pointer'}>
        </div>


        <button id={'myInput'} onClick={myFunction} >sawascraft.tk</button>
        {/*<div className={'header-btns'}>*/}
        {/*  <Link to={'/events'} smooth={true} duration={500} className={'btn'}>Događaji</Link>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default Main;