import React, { use } from "react";
import Cards from "./Cards";

const HomePlants = ({ PlantsPromises }) => {
  const Plants = use(PlantsPromises);

  const homePlants = Plants.filter((item, index) => index < 6);

  return (
    <div className="text-black text-center my-10">
      <h1 className="font-bold text-4xl mb-2 text-gray-400">
        Top Rated Indoor Plants
      </h1>
      <p className="font-serif text-gray-700">
        Loved by plant parents everywhere
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4  p-4  mx-auto ">
        {homePlants.map((plant) => (
          <Cards key={plant.plantId} plant={plant}></Cards>
        ))}
      </div>
    </div>
  );
};

export default HomePlants;
