import React from 'react';
import './App.css';

import Header from './components/Header';
import LandingInformations from './components/LandingInformations';

import { landingInfo } from './data';

function App() {
  return (
    <>
      <Header />
      {landingInfo.map((info) => (
        <LandingInformations key={info.key} info={info} />
      ))}
    </>
  );
}

export default App;
