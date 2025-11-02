import React from 'react';
import { useLoaderData, useLocation } from 'react-router';
import Cards from '../Component/PlantSection/Cards';
import { div } from 'framer-motion/client';

const Plants = () => {
    const plants = useLoaderData();
    console.log(plants);
   
    return (
      <div className='text-center'>
        <h1 className='font-bold text-5xl text-gray-400 my-3'>Our Plants Collection</h1>
        <p className='font-semibold font-sans '>Find your perfect green companion</p>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 m-7 p-5'>
         {   plants.map(plant => <Cards plant={plant} ></Cards>)}
        </div>
      </div>
    );
};

export default Plants;