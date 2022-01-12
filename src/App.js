import {React, useState} from "react";
import './App.css';
import {BrowserRouter, Link, Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Updates from "./Updates/Updates";
import Shop from "./Shop/Shop";
import Nations from "./Nations/Nations";
import Footer from "./Footer/Footer";
import Wave from "./Wave/Wave";
import Contact from "./Contact/Contact";
import AboutUs from "./AboutUs/AboutUs";

function App() {

  const [navbarLightMode, setNavbarLightMode] = useState(true);

  return (
    <BrowserRouter>
      <div className={'Body'}>
        <Routes>
          <Route path={'/'} element={
            <>
              <Navbar isHomePage={true} navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
              <div className={navbarLightMode ? 'Main lightMode' : 'Main'}>
                <Main navbarLightMode={navbarLightMode}></Main>
              </div>
            </>}>
          </Route>
          <Route path={'/news'} element={
            <>
              <Navbar isHomePage={false} navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
              <div className={navbarLightMode ? 'Main lightMode' : 'Main'}>
                <Updates navbarLightMode={navbarLightMode}></Updates>
              </div>
            </>}>
          </Route>
          <Route path={'/shop'} element={
            <>
              <Navbar isHomePage={false} navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
              <div className={navbarLightMode ? 'Main lightMode' : 'Main'}>
                <Shop navbarLightMode={navbarLightMode}></Shop>
              </div>
            </>}>
          </Route>
          <Route path={'/nations'} element={
            <>
              <Navbar isHomePage={false} navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
              <div className={navbarLightMode ? 'Main lightMode' : 'Main'}>
                <Nations navbarLightMode={navbarLightMode}></Nations>
              </div>
            </>}>
          </Route>
          <Route path={'/contact'} element={
            <>
              <Navbar isHomePage={false} navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
              <div className={navbarLightMode ? 'Main lightMode' : 'Main'}>
                <Contact navbarLightMode={navbarLightMode}></Contact>
              </div>
            </>}>
          </Route>
          <Route path={'/about-us'} element={
            <>
              <Navbar isHomePage={false} navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
              <div className={navbarLightMode ? 'Main lightMode' : 'Main'}>
                <AboutUs navbarLightMode={navbarLightMode}></AboutUs>
              </div>
            </>}>
          </Route>
        </Routes>
        <Footer navbarLightMode={navbarLightMode}></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
