import React from "react";
import bannerImage from "../assets/banner.png"; // Import the banner image

const Banner = () => {
  return (
    <div className="relative bg-brown text-white py-4 px-6 flex items-center justify-center">
      {/* Left Section */}
      <div className="absolute left-6 text-lg font-semibold">
        Friday Special Offer at Kaffe Codes !!!
      </div>

      {/* Center Section */}
      <div className="hidden sm:block text-xl md:text-2xl font-bold">
        GET 50% OFF
      </div>

      {/* Right Image */}
      <img
        src={bannerImage}
        alt="Special Offer"
        className="absolute right-6 top-1 transform -translate-y-1/2 h-16 md:h-20 lg:h-24"
        style={{ zIndex: 10 }}
      />
    </div>
  );
};

export default Banner;
