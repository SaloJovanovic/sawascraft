import React, {useState} from "react";
import './Navbar.css';
import {BrowserRouter, Link} from "react-router-dom";
import {FaBookOpen, FaFlag} from "react-icons/fa";
import {RiVipCrown2Fill} from "react-icons/ri";
import {AiFillHome, AiOutlineClose} from 'react-icons/ai';
import {HiInformationCircle, HiMenuAlt2} from 'react-icons/hi';
import {MdUpdate, MdShoppingCart} from 'react-icons/md';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import {BiNews} from 'react-icons/bi';

const Navbar = ({navbarLightMode, setNavbarLightMode, isHomePage}) => {

  const changeColorMode = () => {
    if (!navbarLightMode)
      setNavbarLightMode(true);
    else
      setNavbarLightMode(false);
  }

  let colorModeSwitcher;
  if (!navbarLightMode) {
    colorModeSwitcher =
      <>
        <BsFillSunFill className={'icon'}></BsFillSunFill>
        <span className={'link-text'}>Light mode</span>
      </>
  }
  else {
    colorModeSwitcher =
      colorModeSwitcher =
        <>
          <BsFillMoonStarsFill className={'icon'}></BsFillMoonStarsFill>
          <span className={'link-text'}>Dark mode</span>
        </>
  }

  const[menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    if (menuOpened)
      setMenuOpened(false);
    else
      setMenuOpened(true);
    console.log(menuOpened);
  }

  const[nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbarLightMode && nav ? 'navbar lightMode active' :
                    navbarLightMode ? 'navbar lightMode' :
                    nav ? 'navbar active' : 'navbar'}>
      <ul className={isHomePage ? 'navbar-nav' : 'navbar-nav not-home-page'}>
        <li className={'logo'}>
          <Link className={'nav-link'} to={'/'}>
            <span className={'link-text'}>SAWASCRAFT</span>
            <RiVipCrown2Fill className={'icon'}></RiVipCrown2Fill>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/'}>
            <AiFillHome className={'icon'}></AiFillHome>
            <span className={'link-text'}>HOME</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/news'}>
            <BiNews className={'icon'}></BiNews>
            <span className={'link-text'}>NEWS</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/'}>
            <FaBookOpen className={'icon'}></FaBookOpen>
            <span className={'link-text'}>LORE</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/shop'}>
            <MdShoppingCart className={'icon'}></MdShoppingCart>
            <span className={'link-text'}>SHOP</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/nations'}>
            <FaFlag className={'icon'}></FaFlag>
            <span className={'link-text'}>NATIONS</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/'}>
            <HiInformationCircle className={'icon'}></HiInformationCircle>
            <span className={'link-text'}>ABOUT US</span>
          </Link>
        </li>


        {/*//HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/}
        <ul className={menuOpened ? 'active responsive-menu' : 'responsive-menu'}>
          <li className={'nav-item menu-icon'}>
            <Link onClick={openMenu} className={'nav-link'} to={'#'}>
              <AiOutlineClose className={'icon'}></AiOutlineClose>
            </Link>
          </li>
          <li className={'nav-item'}>
            <Link className={'nav-link'} to={'/'}>
              <AiFillHome className={'icon'}></AiFillHome>
              <span className={'link-text'}>HOME</span>
            </Link>
          </li>
          <li className={'nav-item'}>
            <Link className={'nav-link'} to={'/updates'}>
              <MdUpdate className={'icon'}></MdUpdate>
              <span className={'link-text'}>UPDATES</span>
            </Link>
          </li>
          <li className={'nav-item'}>
            <Link className={'nav-link'} to={'/'}>
              <FaBookOpen className={'icon'}></FaBookOpen>
              <span className={'link-text'}>LORE</span>
            </Link>
          </li>
          <li className={'nav-item'}>
            <Link className={'nav-link'} to={'/shop'}>
              <MdShoppingCart className={'icon'}></MdShoppingCart>
              <span className={'link-text'}>SHOP</span>
            </Link>
          </li>
          <li className={'nav-item'}>
            <Link className={'nav-link'} to={'/nations'}>
              <FaFlag className={'icon'}></FaFlag>
              <span className={'link-text'}>NATIONS</span>
            </Link>
          </li>
          <li className={'nav-item'}>
            <Link className={'nav-link'} to={'/'}>
              <HiInformationCircle className={'icon'}></HiInformationCircle>
              <span className={'link-text'}>ABOUT US</span>
            </Link>
          </li>
          <li className={'nav-item'}>
            <Link onClick={changeColorMode} className={'nav-link'} to={'#'}>
              <>
                {colorModeSwitcher}
              </>
            </Link>
          </li>
        </ul>

        <li className={'nav-item menu-icon'}>
          <Link onClick={openMenu} className={'nav-link'} to={'#'}>
            <HiMenuAlt2 className={'icon'}></HiMenuAlt2>
          </Link>
        </li>


        <li className={'nav-item menu-logo'}>
          <Link className={'nav-link'} to={'/'}>
            <span className={''}>SAWASCRAFT</span>
          </Link>
        </li>
        <li className={'nav-item'}>
          <Link onClick={changeColorMode} className={'nav-link'} to={'#'}>
            <>
              {colorModeSwitcher}
            </>
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Navbar;