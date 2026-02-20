import React from "react";
import { story } from "../assets/aboutData";
import { FaArrowRight } from "react-icons/fa";

const Story = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side Content  */}
        <div className="fade-in">
          {/* badge  */}
          <span className="px-3 py-2 bg-accent-light text-accent rounded-full">
            {story.badge}
          </span>

          {/* title  */}
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold font-heading mb-6 mt-6">
            Our <span className="text-accent">{story.title}</span>{" "}
          </h2>

          {/* description  */}
          {story.paragraphs.map((text, idx) => (
            <p key={idx} className="text-gray-600 mb-6">
              {text}
            </p>
          ))}
          {/* CTA Button  */}
          <button className="flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-full hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-accent-hover cursor-pointer hover:shadow-lg">
            Meet Out Team
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side Content  */}
        <div className="fade-in">
          <div className="bg-accent-light rounded-3xl p-2 overflow-hidden shadow-2xl">
            <img
              className="rounded-3xl w-full hover:scale-105 transition-transform duration-500"
              src={story.image}
              alt="About designHaven"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
