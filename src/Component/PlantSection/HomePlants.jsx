import React, { use } from 'react';


const HomePlants = ({PlantsPromises}) => {
    const Plants = use(PlantsPromises);
    console.log(Plants);
    return (
        <div className='text-black text-center my-10'>
           <h1 className='font-bold text-4xl mb-2 text-gray-400'>Top Rated Indoor Plants</h1>
           <p className='font-serif text-gray-700'>Loved by plant parents everywhere</p>
           <div>

           </div>
        </div>
    );
};

export default HomePlants;