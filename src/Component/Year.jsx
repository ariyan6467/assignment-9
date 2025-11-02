import React, { use, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";

const HeroComponent = ({ PlantsPromises }) => {
  const plants = use(PlantsPromises); // Suspense usage
  const { setDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const plantofWeek = plants[0];

  const handleDetails = () => {
    setDetails(plantofWeek);
    navigate("/details");
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto my-5">
      {/* Left Sidebar */}
      <div className="w-fit text-white flex flex-col justify-center items-center p-5 text-center">
        <img
          src={plantofWeek.image}
          alt={plantofWeek.plantName}
          className="max-w-xs rounded-lg mb-4 shadow-md"
        />
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        {/* Plant of the Week Badge */}
        <span className="inline-block w-fit bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
          Plant of the Week
        </span>

        {/* Featured Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Featured: {plantofWeek.plantName}
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
          {plantofWeek.description}
        </p>

        {/* Price and Easy Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-700 text-xl font-bold">
            ${plantofWeek.price}
          </span>
          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            Easy
          </span>
        </div>

        {/* Plant Image */}

        {/* Learn More Button */}
        <button
          onClick={handleDetails}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 w-max"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
