import React, { Suspense } from 'react';
import Banner from './banner';
import HomePlants from './PlantSection/HomePlants';

const PlantsPromises = fetch("/public/PlantsData.json").then(res => res.json());

const Hero = () => {
    return (
        <div>
           <Banner></Banner>
           <Suspense fallback={<h1>LOading Data...</h1>}>
                  <HomePlants PlantsPromises={PlantsPromises}></HomePlants>
           </Suspense>
         
        </div>
    );
};

export default Hero;