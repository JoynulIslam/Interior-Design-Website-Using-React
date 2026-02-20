import React from "react";
import PageHero from "../components/PageHero";
import { teamData } from "../assets/teamData";
import TeamCard from "../components/TeamCard";
import { FaUser } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <PageHero
        title={"Our"}
        highlight={"Teams"}
        description={
          "A talented team of architects, interior designers, and model makers dedicated to creating exceptional spaces."
        }
      />

      {/* Team Member  */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* grid  */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamData.map((team, idx) => (
              <TeamCard team={team} key={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action  */}
      <div className="py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {/* Left Content  */}
            <div className="text-white text-left px-6 ">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Join Our Design Team
              </h2>
              <p className="text-md max-w-2xl max-auto mb-6">
                We're always looking for talented designers, architects, and
                creative minds to join our studio.
              </p>
              <button className="bg-white rounded-full text-accent px-6 py-3 cursor-pointer hover:bg-white/80 transition duration-300">
                View Open Position
              </button>
            </div>

            {/* Right Content  */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-accent-light/40 rounded-full flex items-center justify-center ">
                <FaUser className="text-7xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
