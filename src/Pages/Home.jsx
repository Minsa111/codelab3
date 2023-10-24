import React from "react";
import Hero from '../Components/hero';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

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