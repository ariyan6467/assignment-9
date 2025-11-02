import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../auth/AuthProvider";

const Cards = ({ plant }) => {
  const{details,setDetails} = useContext(AuthContext);
 

  function handleDetails(){
    setDetails(plant);
  }
    
  return (
     <div className=" rounded-xl bg-white shadow hover:shadow-lg transition p-3">
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3">{plant.plantName}</h2>

      <p className="text-green-700 font-semibold text-lg">Price: ${plant.price}</p>

      <p className="text-yellow-600 font-medium">Rating: ⭐ {plant.rating}</p>

    <NavLink 
    to="/details"
    onClick={handleDetails}
    >
        <button className="mt-4 w-full py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
        View Details
      </button>
    </NavLink>
    </div>
  );
};

export default Cards;
