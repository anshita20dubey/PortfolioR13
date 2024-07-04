import React from 'react';
import 'remixicon/fonts/remixicon.css';

const CenterFlex = () => {
  return (
    <div className='mt-28 text-white relative z-10 flex items-end justify-between w-11/12'>
      <div className='flex bg-black items-center gap-8 px-1 py-1 pl-5 rounded-e-full'>
        <h2 className='text-xl leading-none'>Located <br /> in <br /> India</h2>
        <div className='bg-gray-500 flex items-center justify-center h-20 w-20 rounded-full'>
           <i className="ri-global-line text-4xl rotate-12 font-thin"></i>
        </div>
      </div>
      <div className='flex flex-col gap-10 ml-20'>
        <i className="ri-arrow-right-down-line text-slate-800 text-3xl"></i>
        <h2 className='text-4xl leading-normal text-slate-800 font-normal'>Freelance <br /> Designer and Developer</h2>
      </div>
    </div>
  )
}

export default CenterFlex