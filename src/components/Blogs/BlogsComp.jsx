import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "Immerse yourself in the vibrant colors, rich history, and timeless spirituality of India – a journey of the senses awaits.",
    author: "Tahreem",
    date: "Jan 19, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "Discover the diverse beauty and boundless opportunities of the United States – where every journey is a new adventure",
    author: "Fiza Tahir",
    date: "May 22, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Experience the perfect blend of ancient tradition and cutting-edge innovation in Japan – a land where culture meets the future.",
    author: "Farzan",
    date: "Dec 22, 2023",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
