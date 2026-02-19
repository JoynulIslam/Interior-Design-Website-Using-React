import React from "react";
import SectionHeader from "./SectionHeader";
import { homePageData } from "../assets/homePageData";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const { testimonials } = homePageData;
  return (
    <div className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto p-6">
        {/* Section Header  */}
        <SectionHeader
          badge={"Client Story"}
          title={"What Our"}
          highlight={"Client Say"}
          description={
            "Hear from homeowners who transformed their living spaces with our designs."
          }
        />

        {/* Testimonial Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="fade-in bg-white p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
            >
              {/* Profile  */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading text-gray-800 font-bold">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{item.role}</p>
                </div>
              </div>
              {/* description  */}
              <p className="text-gray-600 mb-4 text-sm">{item.quote}</p>
              {/* stars */}
              <div className="flex text-yellow-400">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <FaStar k1={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
