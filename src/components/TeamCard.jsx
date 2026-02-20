import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter, FaX } from "react-icons/fa6";

const TeamCard = ({ team }) => {
  return (
    <div className="bg-secondary rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition-all duration-300 cursor-pointer fade-in">
      {/* image  */}
      <div>
        <img
          className="w-full h-64 object-cover"
          src={team.image}
          alt={team.name}
        />
      </div>
      {/* content  */}
      <div className="p-6">
        <h2 className="text-gray-900 text-xl font-bold font-heading mb-4">
          {team.name}
        </h2>
        <p className="text-accent font-medium mb-4">{team.role}</p>
        <p className="text-gray-500 text-xs mb-4">{team.bio}</p>

        {/* Social Links  */}
        <div className="flex items-center space-x-4 text-gray-400">
          <FaLinkedin />
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
