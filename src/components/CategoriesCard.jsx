import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

const categories = [
  {
    id: 1,
    image: img1,
    title: 'Bakery Products',
    subtitle: 'Up To 25% Off On Entire Range',
  },
  {
    id: 2,
    image: img2,
    title: 'Tea',
    subtitle: 'Up To 25% Off On Entire Range',
  },
  {
    id: 3,
    image: img3,
    title: 'Coffee',
    subtitle: 'Up To 25% Off On Entire Range',
  },
  {
    id: 4,
    image: img4,
    title: 'Utensils',
    subtitle: 'Up To 25% Off On Entire Range',
  },
  {
    id: 5,
    image: img5,
    title: 'Machinery',
    subtitle: 'Up To 25% Off On Entire Range',
  },
];

const CategoriesCard = () => {
  return (
    <div className="w-full bg-background p-12">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
        Categories
      </h2>
      {/* Grid for Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {categories.slice(0, 3).map((category) => (
          <div
            key={category.id}
            className="relative w-full h-48 bg-cover bg-center rounded-lg shadow-md overflow-hidden"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
              <p className="text-sm text-white">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Flex Layout for Bottom Row */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-4">
        {categories.slice(3).map((category) => (
          <div
            key={category.id}
            className="relative flex-1 h-64 bg-cover bg-center rounded-lg shadow-md overflow-hidden"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="text-sm text-white">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
