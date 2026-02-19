import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
