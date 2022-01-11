import {React, useState} from "react";
import './App.css';
import {BrowserRouter, Link, Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Updates from "./Updates/Updates";
import Shop from "./Shop/Shop";

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
                asdf<br/>
                asdf<br/>
                asdf<br/>
                asdf<br/>
                asdf<br/>
              </div>
            </>}>
          </Route>
          <Route path={'/updates'} element={
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
