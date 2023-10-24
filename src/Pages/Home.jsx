import React from "react";
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <p>Halaman Home</p>
      <Footer />
    </>
  );
};

export default HomePage;