import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './paths/About';
import Contact from './paths/Contact';
import Gallery from './paths/Gallery';
import Home from './paths/Home';
import * as React from 'react';
import { HeaderLayout } from './HeaderLayout';
import { WeddingHeaderLayout } from './WeddingHeaderLayout';
import db from './firebase';
import Wedding from './paths/wedding/Wedding';
import RSVP from './paths/wedding/Rsvp';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Nunito:300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=EB+Garamond" />
      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/arabilla-signature" />

      <BrowserRouter>
        <Switch>
          <WeddingHeaderLayout path={`/wedding`} component={Wedding} />
          <HeaderLayout path={`/gallery`} component={Gallery} />
          <HeaderLayout path={`/about`} component={About} />
          <HeaderLayout path={`/contact`} component={Contact} />
          <HeaderLayout component={Home} />
        </Switch>
      </BrowserRouter>

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
