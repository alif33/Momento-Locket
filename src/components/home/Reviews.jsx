"use client";
import React from "react";
import { reviews } from "@/lib/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Card from "../cards/Review";

const Reviews = () => {
  return (
    <div className="w-10/12 mx-auto py-5">
      <h1 className="text-center trajan-font uppercase text-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent my-10 py-5">Reviews</h1>

      {/* Mobile Carousel (Hidden on Larger Screens) */}
      <div className="md:hidden">
        <Carousel
          showArrows={false} // Hide arrow buttons
          showStatus={false} // Hide status indicators
          showThumbs={false} // Hide thumbnail indicators
          dynamicHeight={false} // Adjust the slide height based on content
          emulateTouch={true} // Enable touch gestures for mobile devices
        >
          {reviews.map((item, index) => (
            <div key={index}>
              <div className="col-span-3 sm:col-span-3 md:col-span-1">
                <h5 className="text-[#747067] inter-font font-light text-2xl">{item.title}</h5>
                <Card img={item.img} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Grid Layout (Hidden on Mobile) */}
      <div className="hidden md:grid grid-cols-3 gap-12">
        {reviews.map((item, index) => (
          <div className="col-span-3 sm:col-span-3 md:col-span-1" key={index}>
            <h5 className="text-[#747067] inter-font font-light text-2xl">{item.title}</h5>
            <Card img={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
