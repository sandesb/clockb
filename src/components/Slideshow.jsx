import React, { useState } from 'react';

const slides = [
  {
    image:
      'https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg',
    title: 'Bakery Products',
    discount: 'Up to 15% OFF',
  },
  {
    image:
      'https://mottolagrocery.com/cdn/shop/files/109190-smooth-sweet-tea-DDMFS-4x3-9e849a386d414cb2b852099f02b6782d_510x@2x.progressive.jpg?v=1719373936',
    title: 'Tea',
    discount: 'Up to 10% OFF',
  },
  {
    image:
      'https://st2.depositphotos.com/1000504/5298/i/950/depositphotos_52980311-stock-photo-kitchen-utensil.jpg', // Replace with actual image link
    title: 'Utensils/ Equipment and Machinery',
    discount: 'Up to 10% OFF',
  },
  {
    image:
      'https://mottolagrocery.com/cdn/shop/files/109190-smooth-sweet-tea-DDMFS-4x3-9e849a386d414cb2b852099f02b6782d_510x@2x.progressive.jpg?v=1719373936', // Replace with actual image link
    title: 'Additional Product 1',
    discount: 'Up to 5% OFF',
  },
  {
    image:
      'https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg', // Replace with actual image link
    title: 'Additional Product 2',
    discount: 'Up to 20% OFF',
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= slides.length ? 0 : prev + 1
    );
  };

  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative w-full overflow-hidden bg-white px-4 md:px-8 lg:px-0">
      {/* Grid of 3 items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full flex-none"
            style={{ height: '70vh' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover "
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-lg">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-sm mb-4">{slide.discount}</p>
                <button className="px-3 py-1 bg-white text-black rounded-md text-xs font-medium hover:bg-gray-200">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={handlePrev}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={handleNext}
      >
        ›
      </button>
    </div>
  );
};

export default Slideshow;
