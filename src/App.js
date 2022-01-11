import {React, useState} from "react";
import './App.css';
import {BrowserRouter, Link, Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Updates from "./Updates/Updates";

function App() {

  const [navbarLightMode, setNavbarLightMode] = useState(true);

  return (
    <BrowserRouter>
      <div className={'Body'}>
        <Navbar navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
        <Routes>
          <Route path={'/'} element={
            <div className={'Main'}>
              <Main navbarLightMode={navbarLightMode}></Main>
            </div>}>
          </Route>
          <Route path={'/updates'} element={
            <div className={'Main'}>
              <Updates navbarLightMode={navbarLightMode}></Updates>
            </div>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
