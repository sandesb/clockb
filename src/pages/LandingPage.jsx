import React from 'react';
import Categories from '../components/Categories';
import Slideshow from '../components/Slideshow'; // Import Slideshow

const LandingPage = () => {
  return (
    <div>
      <main>
        <Categories />
        <Slideshow />

        {/* Content Section */}
        <section className="bg-[#f9f7f5] py-8 text-center">
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
      </main>
      <footer></footer>
    </div>
  );
};

export default LandingPage;
