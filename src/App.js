import React from 'react';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './GlobalStyles';

import Header from './components/Header';
import LandingInformations from './components/LandingInformations';
import Footer from './components/Footer';

import { landingInfo } from './data';

function App() {
  return (
    <>
      <Header />
      {landingInfo.map((info) => (
        <LandingInformations key={info.key} info={info} />
      ))}
      <Footer />
      <GlobalStyle />
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default App;
