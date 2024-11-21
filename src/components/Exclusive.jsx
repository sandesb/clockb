import React from 'react';
import CommonCard from './CommonCard'; // Import CommonCard
import frameImage from '../assets/frame.png'; // Import the left frame image
import machineImage from '../assets/machine.png'; // Import machine image

const exclusiveItems = [
  {
    id: 1,
    image: machineImage,
    title: 'High Voltage Coffee Machine',
    brand: 'VALTRA MACHINES',
    price: 'NPR. 12,999',
    rating: 4.5,
    reviews: 102,
  },
  {
    id: 2,
    image: machineImage,
    title: 'High Voltage Coffee Machine',
    brand: 'VALTRA MACHINES',
    price: 'NPR. 12,999',
    rating: 4.5,
    reviews: 102,
  },
];

const Exclusive = () => {
  return (
    <section className="py-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 px-4 md:px-8 items-start">
        {/* Left Image Section */}
        <div>
          <img
            src={frameImage}
            alt="Kaffe Codes Story"
            className="w-full object-cover"
          />
        </div>

        {/* Right Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {exclusiveItems.map((item) => (
            <div key={item.id} className="w-full">
              <CommonCard
                image={item.image}
                title={item.title}
                brand={item.brand}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exclusive;
