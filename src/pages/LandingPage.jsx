import React from 'react';
import Categories from '../components/Categories';
import Slideshow from '../components/Slideshow';
import Cards from '../components/Cards';
import CategoriesCard from '../components/CategoriesCard';

const LandingPage = () => {
  return (
    <div>
      <main>
        {/* Render Categories at the top */}
        <Categories />

        {/* Render Slideshow */}
        <Slideshow />

        {/* Content Section */}
        <section className="bg-background py-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Kaffe Code Platform To
          </h2>
          <h1 className="text-2xl font-bold text-green-700 my-2">START</h1>
          <p className="text-lg font-medium text-gray-800">
            Your Bakery/ Tea/ Coffee Business
          </p>
          <p className="text-sm font-light text-gray-600 mt-2">
            Kaffe Codes is the platform to run a successful online business in Nepal.
          </p>
        </section>

        {/* Render Cards */}
        <Cards />

        {/* Render Categories Card */}
        <CategoriesCard />

        {/* Render Hand-Picked Brands Section */}
        <section className="py-8 text-center bg-background">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Hand-Picked Brands
          </h2>
          {/* Pass highlightFirst as true for special styling */}
          <Categories replaceFirstImage={true} />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default LandingPage;
