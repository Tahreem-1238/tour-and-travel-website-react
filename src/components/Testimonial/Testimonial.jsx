import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Tehreem",
    text: "The destinations on this tour were beyond breathtaking! The team went out of their way to make sure we were comfortable and had a memorable experience. The small group size made it feel personalized, and the guide’s passion for the locations was contagious. This trip exceeded all our expectations!",

    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Farzan",
    text: "From booking to the final day of our trip, everything went smoothly. The accommodations were top-notch, and the transportation was comfortable and reliable. The tour guide made sure we had the best experience possible. It was the perfect mix of adventure and relaxation. Highly recommend!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Fiza Tahir",
    text: "Our trip was absolutely fantastic! The tour was well-organized, the guide was knowledgeable and friendly, and the itinerary covered all the must-see spots without feeling rushed. Every detail was taken care of, allowing us to truly relax and enjoy. We will definitely be booking with you againn",

    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              As, we have a user personal feedback. you can see mentioned below and enjoyed your trip!
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
