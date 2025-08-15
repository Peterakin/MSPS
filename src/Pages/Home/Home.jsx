import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Steps from "../../Components/Steps/Steps";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Footer />
    </div>
  );
};

export default Home;
