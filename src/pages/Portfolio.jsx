import React, { useState } from "react";
import PageHero from "../components/PageHero";
import PortfolioFilter from "../components/PortfolioFilter";
import { projects } from "../assets/portfolioData";
import PortfolioCard from "../components/PortfolioCard";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All Projects" ||
      project.categories.includes(activeFilter),
  );

  return (
    <div>
      {/* Page Hero  */}
      <PageHero
        title={"Our"}
        highlight={"Portfolios"}
        description={
          "Explore our award-winning home modeling projects that showcase our design excellence."
        }
      />

      {/* Filter Button  */}
      <PortfolioFilter active={activeFilter} setActive={setActiveFilter} />

      {/* Protfolio card grid  */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <PortfolioCard item={project} index={idx} />
            ))}
          </div>

          {/* View all Project Button  */}
          <div className="flex justify-center mt-16">
            <button className="flex items-center justify-center gap-2 bg-accent px-6 py-2 rounded-full cursor-pointer">
              View All Projects
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
