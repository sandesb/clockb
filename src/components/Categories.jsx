import React from 'react';

// Import all images manually
import coffee1 from '../assets/icons/coffee1.svg';
import coffee2 from '../assets/icons/coffee2.svg';
import coffee3 from '../assets/icons/coffee.svg';
import coffee4 from '../assets/icons/coffee4.svg';
import coffee5 from '../assets/icons/coffee5.svg';
import coffee6 from '../assets/icons/coffee6.svg';
import colored from '../assets/icons/colored.svg'; // Special colored image

// List of images and categories
const images = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6];
const categories = [
  { name: 'Coffee' },
  { name: 'Bakery' },
  { name: 'Tea' },
  { name: 'Utensils' },
  { name: 'Machineries' },
  { name: 'Cakes' },
];

const Categories = ({ replaceFirstImage = false }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 w-[calc(33.33%-12px)] sm:w-[calc(50%-12px)] md:w-auto"
        >
          <div className="bg-[#f5efea] p-4 rounded-full">
            {/* Dynamically replace the first image if replaceFirstImage is true */}
            <img
              src={replaceFirstImage && index === 0 ? colored : images[index]}
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
