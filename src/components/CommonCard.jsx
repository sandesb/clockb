import React from 'react';
import { Star, Heart } from 'lucide-react';

const CommonCard = ({ image, title, brand, price, rating, reviews }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<Star key={i} className="w-4 h-4 text-orange-500" />);
      } else if (i < rating) {
        stars.push(<Star key={i} className="w-4 h-4 text-orange-500" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="relative flex flex-col items-center   p-4 transition-shadow duration-200">
      {/* Heart Icon */}
      <button className="absolute top-4 right-4">
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
      </button>

      {/* Image */}
      <div className="w-full  flex justify-center items-center ">
        <img
          src={image}
          alt={title}
          className="h-full object-contain rounded-full"
        />
      </div>

      {/* Card Details */}
      <div className="text-center">
        <p className="text-xs font-medium text-gray-600">{brand}</p>
        <h3 className="text-sm font-semibold text-gray-800 mt-1 mb-2">
          {title}
        </h3>

        {/* Ratings */}
        <div className="flex items-center justify-center mt-2">
          {renderStars(rating)}
          <span className="text-sm text-gray-400 ml-2">({reviews})</span>
        </div>

        {/* Price */}
        <p className="text-sm font-medium text-gray-800 mt-3">{price}</p>
      </div>
    </div>
  );
};

export default CommonCard;
