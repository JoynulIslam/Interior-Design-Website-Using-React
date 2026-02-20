import React from "react";
import PageHero from "../components/PageHero";
import Story from "../components/Story";
import Values from "../components/Values";
import TimeLine from "../components/TimeLine";

const About = () => {
  return (
    <div>
      <PageHero
        title={"About"}
        highlight={"DesignHaven"}
        description={
          "For nearly two decades, we've been transforming visions into breathtaking realities, creating homes that tell stories and reflect personalities."
        }
      />
      <Story />
      <Values />
      <TimeLine />
    </div>
  );
};

export default About;
