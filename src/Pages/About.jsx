import React from "react";
import Hero from '../Components/hero';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
        <p>Halaman About Us</p>
      <Footer />
    </>
  );
};

export default AboutPage;