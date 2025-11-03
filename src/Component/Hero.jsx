import React, { Suspense } from 'react';
import Banner from './banner';
import HomePlants from './PlantSection/HomePlants';
import Careplants from './Careplants';
import Experts from './Experts';
import Year from './Year';

const PlantsPromises = fetch("PlantsData.json").then(res => res.json());

const Hero = () => {


    return (
        <div>
           <Banner></Banner>
           <Suspense fallback={<h1>LOading Data...</h1>}>
                  <HomePlants PlantsPromises={PlantsPromises}></HomePlants>
           </Suspense>
           
           <Careplants></Careplants>
           <Experts></Experts>
          <Suspense fallback={<h1>LOading Data...</h1>}>
            < Year PlantsPromises={PlantsPromises} ></Year>
          </Suspense>
        </div>
    );
};

export default Hero;