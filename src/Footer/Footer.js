import React, {useEffect} from "react";
import './Footer.css';
import {Link} from 'react-router-dom';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaTwitch} from "react-icons/fa";
import  Aos from "aos";
import "aos/dist/aos.css";

const Footer = ({navbarLightMode}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const onInstagramClicked = () => {
    window.location.href = "https://www.instagram.com/sawascraft_/";
  }
  const onTiktokClicked = () => {
    window.location.href = "https://www.tiktok.com/@sawascraft";
  }
  const onTwitterClicled = () => {
    window.location.href = "https://twitter.com/sawascraft_";
  }
  const onYoutubeClicled = () => {
    window.location.href = "https://www.youtube.com/channel/UCIDTaRFuYI0d4JaFLTYF7Pw";
  }
  const onTwitchClicled = () => {
    window.location.href = "https://www.twitch.tv/sawastreams_";
  }

  return (
    <div className={navbarLightMode ? 'footer-container lightMode' : 'footer-container'}>
      <div data-aos={"fade-up"} className={'logo-and-social footer-element'}>
        <Link to={'/'} className={'footer-logo'}>Social networks</Link>
        <div className={'social'}>
          <Link to={'//www.instagram.com/sawascraft_/'}><FaInstagram className={'social-icon'}></FaInstagram></Link>
          <Link to={'//www.tiktok.com/@sawascraft'}><FaTiktok className={'social-icon'}></FaTiktok></Link>
          <Link to={'//twitter.com/sawascraft_'}><FaTwitter className={'social-icon'}></FaTwitter></Link>
          <Link to={'//www.youtube.com/channel/UCIDTaRFuYI0d4JaFLTYF7Pw'}><FaYoutube className={'social-icon'}></FaYoutube></Link>
          <Link to={'//www.twitch.tv/sawastreams_'}><FaTwitch className={'social-icon'}></FaTwitch></Link>
        </div>
      </div>
      <div data-aos={"fade-up"} className={'support footer-element'}>
        {/*<h3>Podrška</h3>*/}
        <Link to={'/contact'} className={'link'}>Contact</Link>
        <Link to={'/faq'} className={'link'}>FAQ</Link>
      </div>
    </div>
  )
}

export default Footer;