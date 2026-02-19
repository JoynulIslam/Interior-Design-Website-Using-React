import React from "react";
import { FaEnvelope, FaHome, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { footerData } from "../assets/footerData";

const Footer = () => {
  const { company, quickLinks, services } = footerData;
  return (
    <div className="pt-20 pb-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info  */}
          <div>
            {/* logo  */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <company.logoIcon className="text-2xl" />
              </div>
              <div className="font-heading text-2xl font-bold">
                Design<span className="text-accent">Haven</span>{" "}
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Premium home modeling and interior design studio creating
              exceptional living spaces since 2005.
            </p>
            {/* social icon  */}
            <div className="flex items-center space-x-4">
              {company.socialLinks.map((social, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  {" "}
                  <social.icon />{" "}
                </a>
              ))}
            </div>
          </div>

          {/* Quick link  */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-300 ">
              {quickLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="text-sm hover:text-accent cursor-pointer"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Services  */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300 ">
              {services.map((service, idx) => (
                <li key={idx} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info  */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm ">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                <span className="text-gray-400">Notun Bazar, Dhaka</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-accent" />
                <span className="text-gray-400">013xxxxxxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-accent" />
                <span className="text-gray-400">info@designhaven.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
