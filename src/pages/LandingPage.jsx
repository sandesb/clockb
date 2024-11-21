import React from 'react';
import Categories from '../components/Categories';
import Slideshow from '../components/Slideshow';
import Cards from '../components/Cards';
import CategoriesCard from '../components/CategoriesCard';
import Exclusive from '../components/Exclusive';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CoffeeSelection from '../components/CoffeeSelection';

const LandingPage = () => {
  return (
    <div>
      <main className="bg-background">
        {/* Render Categories at the top */}
        <Categories />

        {/* Render Slideshow */}
        <Slideshow />

        {/* Content Section */}
        <section className="bg-background py-8 sm:px-4 text-center">
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
        <div className="px-12">

        <Cards  />

        </div>

        {/* Render Categories Card */}
        <CategoriesCard />

        {/* Render Hand-Picked Brands Section */}
        <section className="py-4 text-center bg-background">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Hand-Picked Brands
          </h2>
          {/* Pass highlightFirst as true for special styling */}
          <Categories replaceFirstImage={true} />
        <div className="px-6">

        <Cards className=""/>
        </div>
        <Exclusive/>
        <div className='px-8'>
        <Banner/>
        </div>
        <CoffeeSelection/>

        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default LandingPage;
