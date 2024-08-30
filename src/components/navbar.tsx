import Image from 'next/image'
import React from "react";

export default function App() {
  return (
    <nav className='bg-gray-200 justify-between items-center h-12 px-4 flex w-full fixed top-0 left-0  ' >
      <Image
        src="/logo.png" 
        width={25}
        height={25}
        alt="logo"
      />
      <div className="hidden sm:flex gap-4  justify-between  ">
        
        <div className=' text-center w-[100%] ' >
        
          <span  className=' text-black text-xl font-semibold opacity-80 ' >
            SpreadSheet
          </span>
        </div>
      </div>
     
    </nav>
  );
}

