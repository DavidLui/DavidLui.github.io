import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './paths/About';
import Contact from './paths/Contact';
import Gallery from './paths/Gallery';
import Home from './paths/Home';
import Logo from './imgs/logos/logo.png';
import * as React from 'react';
import { HeaderLayout } from './HeaderLayout';
import db from './firebase';
import Wedding from './paths/Wedding';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Nunito:300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=EB+Garamond" />

      <div className='logo_header'>
        <a href='/'>
          <img id='header_img' alt='logo' src={Logo} />
        </a>
      </div>

      <BrowserRouter>
        <Switch>
          <Route path={`/wedding`} component={Wedding} />
          <HeaderLayout path={`/gallery`} component={Gallery} />
          <HeaderLayout path={`/about`} component={About} />
          <HeaderLayout path={`/contact`} component={Contact} />
          <HeaderLayout component={Home} />
        </Switch>
      </BrowserRouter>

      <footer className="section section_footer">
        <div className="footcontainer">
          <div className="icons">
            <a href="https://www.facebook.com/blissfullyso/" target='_blank'>
              <img src="https://assets-global.website-files.com/5babb9f91ab233724e53ce0b/5babb9f91ab233460253ce65_font-awesome_4-7-0_facebook_100_0_278bd5_none.png"
                width="25" alt="fb" />
            </a>
            <a href="https://www.instagram.com/blissfullyso.events" target='_blank'>
              <img src="https://assets-global.website-files.com/5babb9f91ab233724e53ce0b/5babb9f91ab233817a53ce66_font-awesome_4-7-0_instagram_100_0_278bd5_none.png"
                width="25" alt="insta" />
            </a>
          </div>
          <h5>NJ . NY // 917.830.7788</h5>
          <h5>BLISSFULLYSOEVENTS@GMAIL.COM</h5>
          <h8>DESIGN/BRANDING: ARIEL MA</h8>
          <h8>www.arielma.com</h8>
        </div>
      </footer>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous" />
    </>
  );
}

export default App;
