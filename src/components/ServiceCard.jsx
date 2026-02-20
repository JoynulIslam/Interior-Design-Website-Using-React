import { FaArrowRight, FaCheck } from "react-icons/fa";
import { services } from "../assets/servicesData";

const ServiceCard = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Gird  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer fade-in"
            >
              {/* Icon  */}
              <div className="w-16 h-16 bg-accent rounded-full text-white flex items-center justify-center mb-6">
                <service.icon className="text-2xl" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 text-sm">
                {service.description}
              </p>

              {/* unordered List  */}
              <ul className="space-y-4 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-gray-600"
                  >
                    <FaCheck className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button  */}
              <button className="px-6 py-2 bg-accent text-white rounded-full cursor-pointer flex items-center gap-2">
                Lern More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
