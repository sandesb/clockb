import React from 'react';

// Import all images manually
import coffee1 from '../assets/icons/coffee1.svg';
import coffee2 from '../assets/icons/coffee2.svg';
import coffee3 from '../assets/icons/coffee.svg';
import coffee4 from '../assets/icons/coffee4.svg';
import coffee5 from '../assets/icons/coffee5.svg';
import coffee6 from '../assets/icons/coffee6.svg';
import coffee7 from '../assets/icons/coffee7.svg'; // New image for Brownies
import colored from '../assets/icons/colored.svg'; // Special colored image

// List of images and categories
const images = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6, coffee7];
const categories = [
  { name: 'Coffee' },
  { name: 'Bakery' },
  { name: 'Tea' },
  { name: 'Utensils' },
  { name: 'Machineries' },
  { name: 'Cakes' },
  { name: 'Brownies' }, // New category
];

const Categories = ({ replaceFirstImage = false }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-center gap-2 w-[calc(33.33%-12px)] sm:w-[calc(50%-12px)] md:w-auto group"
        >
          <div className="bg-[#f5efea] p-4 rounded-full cursor-pointer relative overflow-hidden">
            {/* Dynamically replace the first image if replaceFirstImage is true */}
            <img
              src={replaceFirstImage && index === 0 ? colored : images[index]}
              alt={category.name}
              className="w-[32px] h-[32px] z-10"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
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
