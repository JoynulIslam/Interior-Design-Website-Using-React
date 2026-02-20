import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ item, index }) => {
  return (
    <div key={index} className="rounded-2xl overflow-hidden">
      {/* image  */}
      <div className="rounded-2xl overflow-hidden hover:scale-105 duration-300 transition-transform ease-in-out mb-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
      </div>

      <h3 className="text-2xl text-gray-800 font-heading font-bold mb-2">
        {item.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">{item.description}</p>

      {/* link  */}
      <div className="flex items-center justify-between">
        <span className="text-accent font-medium">{item.location}</span>
        <FaArrowRight className="text-xl hover:text-accent cursor-pointer transition duration-300" />
      </div>
    </div>
  );
};

export default PortfolioCard;
