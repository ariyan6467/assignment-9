import React from 'react';

const Experts = () => {
    return (
       <div className='text-center flex flex-col justify-center items-center bg-green-200 mx-4 p-4 rounded-xl'>
                 <h1 className='font-bold text-4xl mt-4'>Essential Plant Care Tips</h1>
                 <p className='text-gray-500 my-3'>Simple guidelines for thriving plants</p>
      
                 <div className='flex mx-8 my-20 space-x-8 '>
                  <div className='text-center flex flex-col justify-center items-center bg-red-100 p-3.5 rounded-2xl'>
                    <img 
                    src="https://koala.sh/api/image/v2-8njv2-zjvsi.jpg?width=1216&height=832&dream
                    
                    " alt="" srcset="" className='w-[70px] h-[60px] rounded-full'  />
                         <h2 className='font-bold text-2xl mt-6 mb-3'>Sarah Mitchell</h2>
                      <p className='text-gray-600 leading-6.5'>Tropical Plant Specialist</p>
                  </div>
      
                   <div className='text-center flex flex-col justify-center items-center bg-red-100 p-3.5 rounded-2xl'>
                   <img src="https://static.vecteezy.com/system/resources/previews/046/840/451/non_2x/scientist-observing-plants-in-laboratory-ai-generated-photo.jpeg" alt="" srcset=""  className='w-[70px] h-[60px] rounded-full' />
                      <h2 className='font-bold text-2xl mt-6 mb-3'>David Chen</h2>
                      <p className='text-gray-600 leading-6.5'>Indoor Garden Designer</p>
                  </div>
      
      
                <div  className='text-center flex flex-col justify-center items-center bg-red-100 p-3.5 rounded-2xl'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5d01ccd13694d000015810dd/419fd700-fcfb-4c60-8c29-d3c9ba156fa0/how-to-indoor-house-plants-the-plant-doctor-videos-patreon-youtube-tiktok-facebook-instagram.jpg" alt="" srcset=""  className='w-[70px] h-[60px] rounded-full' />
                      <h2 className='font-bold text-2xl mt-6 mb-3'>Emma Rodriguez</h2>
                      <p className='text-gray-600 leading-6.5'>Plant Care Consultant</p>
                  </div>
                 </div>
              </div>
    );
};

export default Experts;