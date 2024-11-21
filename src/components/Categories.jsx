import React from 'react';

// Import all images manually
import coffee1 from '../assets/icons/coffee1.svg';
import coffee2 from '../assets/icons/coffee2.svg';
import coffee3 from '../assets/icons/coffee3.svg';
import coffee4 from '../assets/icons/coffee4.svg';
import coffee5 from '../assets/icons/coffee5.svg';
import coffee6 from '../assets/icons/coffee6.svg';
import coffee7 from '../assets/icons/coffee7.svg';

// List of images and categories
const images = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6, coffee7];
const categories = [
  { name: 'Bakery' },
  { name: 'Coffee' },
  { name: 'Tea' },
  { name: 'Utensils' },
  { name: 'Machineries' },
  { name: 'Cakes' },
  { name: 'Brownies' },
];

const Categories = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 w-[calc(33.33%-12px)] sm:w-[calc(50%-12px)] md:w-auto"
        >
          <div className="bg-[#f5efea] p-4 rounded-full">
            {/* Dynamically load images using the index */}
            <img
              src={images[index]}
              alt={category.name}
              className="w-[32px] h-[32px]"
            />
          </div>
          <span className="text-sm font-normal text-gray-700">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
