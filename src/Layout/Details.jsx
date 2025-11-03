import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const { details } = useContext(AuthContext);
  // console.log(details);
  const image = details.image;
  const name = details.plantName;
  const description = details.description;
  const price = details.price;
  const rating = details.rating;
  const stock = details.availableStock;

 const notify = () => toast("Consultaion is Booked");
  function handleBookNOw(e) {
    e.preventDefault();

    e.target.reset();
  
  }
     
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* plant main section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* big image left */}
        <img
          src={image}
          alt={name}
          className="w-full rounded-xl shadow-md object-cover h-[450px]"
        />

        {/* info right */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-3">{name}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          <p className="text-xl font-semibold text-green-700 mb-2">
            Price: ${price}
          </p>
          <p className="text-gray-700">Rating: ⭐ {rating}</p>
          <p className="text-gray-700 mb-10">Stock: {stock} items left</p>
        </div>
      </div>

      {/* Book Consultation Form */}
      <div className="mt-16 bg-white shadow-lg border rounded-xl p-6 md:p-10 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Book Consultation
        </h2>

        <form className="space-y-5" onSubmit={handleBookNOw}>
          <div>
            <label className="block mb-1 text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:border-green-600"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:border-green-600"
            />
          </div>

          <button
          onClick={notify}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 font-medium"
          >
            Book Now
          </button>
           <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Details;
