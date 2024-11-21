import React from 'react';
import { Star, Heart } from 'lucide-react'; // Import Lucide icons
import machineImage from '../assets/machine.png'; // Import the machine image

const cards = [
  {
    id: 1,
    image: machineImage,
    title: 'High Voltage Bones Cups - 12 Count',
    brand: 'VALTRA MACHINES',
    price: 'NPR. 733',
    rating: 4, // Number of stars to fill
    reviews: 150,
  },
  {
    id: 2,
    image: machineImage,
    title: 'Valtra Machines Specialty Coffee System',
    brand: 'VALTRA MACHINES',
    price: 'NPR. 733',
    rating: 3.5,
    reviews: 150,
  },
  {
    id: 3,
    image: machineImage,
    title: 'Ninja CFP307 Specialty Coffee System',
    brand: 'NINJA TECH',
    price: 'NPR. 733',
    rating: 4,
    reviews: 150,
  },
  {
    id: 4,
    image: machineImage,
    title: 'Organic and Fair Trade Dark Roast Beans',
    brand: 'DEATH WISH COFFEE',
    price: 'NPR. 733',
    rating: 5,
    reviews: 150,
  },
  {
    id: 5,
    image: machineImage,
    title: 'Organic Matcha Fresh Tea Powder',
    brand: 'ORGANIC MATCHA',
    price: 'NPR. 733',
    rating: 4.5,
    reviews: 150,
  },
];

const Cards = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<Star key={i} className="w-4 h-4 text-orange-500" />);
      } else if (i < rating) {
        stars.push(
          <Star key={i} className="w-4 h-4 text-orange-500" />
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full px-12 bg-background">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Top Picks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
          >
            {/* Heart Icon */}
            <button className="absolute top-4 right-4">
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
            </button>

            {/* Image */}
            <div className="w-full h-32 flex justify-center items-center mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="h-full object-contain"
              />
            </div>

            {/* Card Details */}
            <div className="text-center">
              <p className="text-xs font-medium text-gray-600">{card.brand}</p>
              <h3 className="text-sm font-semibold text-gray-800 mt-1 mb-2">
                {card.title}
              </h3>

              {/* Ratings */}
              <div className="flex items-center justify-center mt-2">
                {renderStars(card.rating)}
                <span className="text-sm text-gray-400 ml-2">
                  ({card.reviews})
                </span>
              </div>

              {/* Price */}
              <p className="text-sm font-medium text-gray-800 mt-3">
                {card.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
