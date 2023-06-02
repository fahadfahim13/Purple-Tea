import "./home.css";
import React from 'react';

import HomePage from 'uicontainers/HomePage';
import About from 'uicontainers/About';
import Mission from "uicontainers/Mission";
import Footer from "uicontainers/Footer";
import Vision from "uicontainers/Vision";
import Work from "uicontainers/Work";
import Contact from "uicontainers/Contact";

const Home = () => {

  return (
    <div className="AppHome">
      <HomePage />
      <About />
      <Mission />
      <Vision />
      <Work />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default Home;
