import React from 'react';
import { IoIosWater} from "react-icons/io";
import { PiSunLight } from "react-icons/pi";
import { GiTreeBranch } from "react-icons/gi";
const Careplants = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center bg-green-200 mx-4 p-4 rounded-xl'>
           <h1 className='font-bold text-4xl mt-4'>Essential Plant Care Tips</h1>
           <p className='text-gray-500 my-3'>Simple guidelines for thriving plants</p>

           <div className='flex mx-8 my-20 space-x-8 '>
            <div className='text-center flex flex-col justify-center items-center bg-red-100 p-3.5 rounded-2xl'>
                <IoIosWater />
                <h2 className='font-bold text-2xl mt-6 mb-3'>Watering</h2>
                <p className='text-gray-600 leading-6.5'>Most indoor plants prefer to dry out slightly between waterings. Check soil moisture before watering.</p>
            </div>

             <div className='text-center flex flex-col justify-center items-center bg-red-100 p-3.5 rounded-2xl'>
               <PiSunLight />
                <h2 className='font-bold text-2xl mt-6 mb-3'>Sunlight</h2>
                <p className='text-gray-600 leading-6.5'>Place plants in bright, indirect light. Avoid direct harsh sunlight that can scorch leaves.</p>
            </div>


          <div  className='text-center flex flex-col justify-center items-center bg-red-100 p-3.5 rounded-2xl'>
               <GiTreeBranch />
                <h2 className='font-bold text-2xl mt-6 mb-3'>Fertilizing</h2>
                <p className='text-gray-600 leading-6.5'>Feed your plants during growing season (spring/summer) with balanced liquid fertilizer monthly..</p>
            </div>
           </div>
        </div>
    );
};

export default Careplants ;