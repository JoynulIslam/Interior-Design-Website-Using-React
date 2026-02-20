import { services } from "../assets/contactData";

const ContactForm = () => {
  return (
    <div className="bg-secondary fade-in rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl text-gray-800 font-bold font-heading mb-6">
        Send Us a message
      </h3>
      {/* Form  */}
      <form>
        {/* name and email  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name  */}
          <div>
            <label htmlFor="" className="block mb-2 text-gray-600">
              Name
            </label>
            <input
              type="text"
              className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent/40 placeholder:text-xs"
              placeholder="Enter your name"
            />
          </div>
          {/* Email  */}
          <div>
            <label htmlFor="" className="block mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent/40 placeholder:text-xs"
              placeholder="Enter your email"
            />
          </div>
        </div>
        {/* Phone  */}
        <div>
          <label htmlFor="" className="block mb-2 text-gray-600">
            Phone
          </label>
          <input
            type="email"
            className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent/40 placeholder:text-xs"
            placeholder="013xxxxxxxx"
          />
        </div>
        {/* Services  */}
        <div className="mb-4">
          <label htmlFor="" className="block mb-2 text-gray-600">
            Services
          </label>
          <select
            name=""
            id=""
            className="w-full px-6 py-2 border-2 border-accent/40"
          >
            <option value="" className="text-gray-600">
              Select a Service
            </option>
            {services.map((service, idx) => (
              <option key={idx} value="">
                {service}
              </option>
            ))}
          </select>
        </div>
        {/* Message  */}
        <div className="mb-4">
          <label htmlFor="" className="block mb-2 text-gray-600">
            Message
          </label>
          <textarea
            name=""
            id=""
            rows={4}
            className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent/40 placeholder:text-xs"
            placeholder="Enter your message"
          ></textarea>
        </div>
        {/* button  */}
        <button className="px-4 py-2 bg-accent text-white rounded-full cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
