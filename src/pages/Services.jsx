import React from "react";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import ServicesProcess from "../components/ServicesProcess";

const Services = () => {
  return (
    <div>
      <PageHero
        title={"Our"}
        highlight={"Services"}
        description={
          "Comprehensive home modeling and design solutions tailored to your unique needs and vision."
        }
      />
      <ServiceCard />
      <ServicesProcess />
    </div>
  );
};

export default Services;
