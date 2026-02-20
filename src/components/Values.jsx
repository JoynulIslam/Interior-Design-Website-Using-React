import React from "react";
import SectionHeader from "./SectionHeader";
import { values } from "../assets/aboutData";

const Values = () => {
  return (
    <div className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* SectionHeader  */}
        <SectionHeader
          badge={"Our Values"}
          title={"What"}
          highlight={"Drive Us"}
          description={
            "The core principles that guide every project we undertake."
          }
        />
        {/* Values Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                {/* Icon  */}
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mb-4">
                  <value.icon className="text-2xl" />
                </div>

                {/* title  */}
                <h4 className="text-gray-800 font-heading mb-4 font-bold text-2xl">
                  {value.title}
                </h4>

                <p className="text-center text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
