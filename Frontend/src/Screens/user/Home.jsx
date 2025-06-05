import React from 'react';
import { medLogo } from '../../assets/index';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      
    <>
      <div id="home" className="w-full mb-[80px] h-[600px] flex items-center justify-center">
        <div className="h-[100%] w-[80%] flex flex-wrap justify-center pt-4 mt-10 md:pt-0 border md:flex bg-white rounded-2xl shadow-2xl">
          <div className="md:w-1/2 md:h-full transform transition duration-500 hover:scale-125 flex flex-col justify-center items-center flex-wrap">
            <h1 className="md:text-[30px] text-[24px] font-bold">Welcome to</h1>
            <h1 className="md:text-[50px] text-[38px] font-bold">MEDICARE</h1>
            <div className="mt-4">
              {/* Add more name and roll number fields here */}
              <div className='flex text-2xl'>
                <div className='md:mx-9'>
                <p className="md:text-[20px] text-[18px] pl-1 text-gray-400">Ishwar Amle</p>
                <p className="md:text-[20px] text-[18px] pl-2 text-gray-400">Sudhanshu</p>
               
                </div>
                <div>
                <p className="md:text-[20px] text-[18px] text-gray-400">2023MCB1348</p>
                <p className="md:text-[20px] text-[18px] text-gray-400">2023MEB1387</p>
                
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:h-full px-4 md:px-0 md:pt-20 pt-3">
            <img src={medLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

// import React from 'react'
// import { medLogo } from '../../assets/index';
// import {Link} from 'react-router-dom'
// const Home = () => {
//     return (
//         <>
//             <div id = "home" className='w-full mb-[80px] h-[600px] flex items-center justify-center '>
//                 <div className='h-[80%] w-[80%] border flex bg-white rounded-2xl shadow-2xl'>
//                     <div className="w-1/2 h-full transform  transition duration-500 hover:scale-125  flex flex-col justify-center items-center flex-wrap">
//                         <h1 className='text-[30px] font-bold'>
//                             Welcome to
//                         </h1>
//                         <h1 className='text-[50px] font-bold'>
//                             MEDICARE
//                         </h1>
//                         <p className='text-[20px] text-gray-400'>
//                             GROUP 2
//                         </p>
//                     </div>
//                     <div className='w-1/2 h-full pt-3'>
//                         <img src={medLogo} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </>


//     );
// }

// export default Home
