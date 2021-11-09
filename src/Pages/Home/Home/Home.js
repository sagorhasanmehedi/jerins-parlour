import React from "react";
import Benner from "../Benner/Benner";
import Navigation from "../../Seard/Nevigation/Navigation";
import Contuc from "../Contuc/Contuc";
import Services from "../Service/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Benner />

      <Services />
      <Contuc />
    </div>
  );
};

export default Home;
