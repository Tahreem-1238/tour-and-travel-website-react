import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Our mission is to turn your travel dreams into reality by offering personalized, seamless journeys that cater to your unique preferences. Whether it's a relaxing getaway, a cultural exploration, or an adrenaline-packed adventure, we've got you covered.
          </p>
          <br />
          <p>
          With a passion for exploration and a commitment to excellence, we bring you handpicked destinations, expert guides, and travel experiences that go beyond the ordinary.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
