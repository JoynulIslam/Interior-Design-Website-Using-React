import { FaArrowRight } from "react-icons/fa";
import { blogPosts } from "../assets/blogPostData";
import BlogCard from "../components/BlogCard";
import PageHero from "../components/PageHero";

const Blog = () => {
  return (
    <div>
      {/* Page Hero  */}
      <PageHero
        title={"Design"}
        highlight={"Insight"}
        description={
          "Explore design trends, tips, and insights from our team of experts."
        }
      />
      {/* blog post section  */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <BlogCard post={post} key={idx} />
            ))}
          </div>
          {/* View all Project Button  */}
          <div className="flex items-center justify-center mt-8">
            <button className="flex items-center justify-center gap-2 bg-accent px-6 py-2 rounded-full cursor-pointer">
              View All Articles
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
