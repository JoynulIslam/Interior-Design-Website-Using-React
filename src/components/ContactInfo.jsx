import React from "react";
import { contactInfo, socialLinks } from "../assets/contactData";

const ContactInfo = () => {
  return (
    <div className="fade-in">
      <h2 className="text-3xl md:text-4xl text-gray-800 font-heading font-bold mb-6">
        Contact <span className="text-accent">Information</span>{" "}
      </h2>
      {/* Contact information  */}
      <div className="space-y-8 mb-12">
        {contactInfo.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            {/* icon  */}
            <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center">
              <item.icon />
            </div>
            <div>
              <h4 className="text-gray-800 font-bold font-heading mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 max-w-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Social links  */}
      <div>
        <h4 className="text-2xl text-gray-800 font-heading font-bold mb-4">
          Follow Us
        </h4>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, idx) => (
            <a
              href="#"
              key={idx}
              className="w-12 h-12 bg-accent-light transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
