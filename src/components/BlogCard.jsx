import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-secondary rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer fade-in">
      {/* image  */}
      <div>
        <img
          className="w-full h-64 object-cover"
          src={post.image}
          alt={post.title}
        />
      </div>

      {/* content  */}
      <div className="p-6">
        {/* calender  */}
        <div className="flex items-center gap-4 text-gray-600 text-xs mb-6">
          <span className="flex items-center gap-2">
            <FaCalendar />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <FaClock />
            {post.readTime}
          </span>
        </div>

        <h2 className="text-gray-800 font-heading font-bold text-xl mb-6 ">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm mb-6">{post.description}</p>
        <button className="flex items-center gap-2 text-accent cursor-pointer">
          Read Article
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
