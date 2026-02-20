import React from "react";
import SectionHeader from "./SectionHeader";
import { timeline } from "../assets/aboutData";

const TimeLine = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* SectionHeader  */}
        <SectionHeader
          badge={"Our Journey"}
          title={"Milestones"}
          highlight={"Timeline"}
          description={"Key moments in our journey of design excellence."}
        />

        {/* TimeLine Section  */}

        <div className="max-w-4xl  mx-auto fade-in">
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center">
                  {item.year}
                </div>
                <div className="bg-secondary p-6 rounded-2xl grow">
                  <h3 className="font-heading text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
