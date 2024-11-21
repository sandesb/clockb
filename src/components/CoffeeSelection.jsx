import React from "react";
import coffeeframe from "../assets/coffeeframe.png"; // Import coffee frame image
import machineImage from "../assets/machine.png"; // Import machine image
import CommonCard from "./CommonCard"; // Import CommonCard component

const coffeeItems = [
  {
    id: 1,
    image: machineImage,
    title: "Lavazza Super Crema Espresso",
    brand: "LAVAZZA",
    price: "NPR. 999",
    rating: 4.5,
    reviews: 23,
  },
  {
    id: 2,
    image: machineImage,
    title: "High Voltage Bones Cups - 12 Count",
    brand: "HIGH VOLTAGE",
    price: "NPR. 733",
    rating: 4,
    reviews: 150,
  },
  {
    id: 3,
    image: machineImage,
    title: "Organic and Fair Trade Dark Roast Whole Bean",
    brand: "DEATH WISH COFFEE",
    price: "NPR. 733",
    rating: 5,
    reviews: 150,
  },
  {
    id: 4,
    image: machineImage,
    title: "Kicking Horse Coffee Kick Ass Whole Bean",
    brand: "KICKING HORSE COFFEE",
    price: "NPR. 733",
    rating: 4.5,
    reviews: 150,
  },
];

const CoffeeSelection = () => {
  return (
    <section className="py-16 bg-background relative">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center px-8">
        {/* Left Image Section */}
        <div className="relative flex items-center justify-center">
          {/* Circular Coffee Frame */}
          <div className="relative rounded-full overflow-hidden w-80 h-80">
            <img
              src={coffeeframe}
              alt="Coffee Frame"
              className="w-full h-full object-cover"
            />
          </div>
          {/* White Faded Circle */}
          <div className="ml-[78px] absolute inset-0 w-80 h-80 md:ml-[34px] bg-gradient-to-br from-white to-transparent rounded-full opacity-70"></div>
        </div>

        {/* Right Cards Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Coffee Selections
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            From Harvest to Happiness
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeItems.map((item) => (
              <CommonCard
                key={item.id}
                image={item.image}
                title={item.title}
                brand={item.brand}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSelection;
