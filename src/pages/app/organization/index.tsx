import React from 'react'
import Image from "next/image"

import category1 from '@/assets/category1.png';
import { Link } from 'lucide-react';

const arr= {
    id: "88",
    image: category1,
    name: "lovish",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo, asperiores perferendis unde consequatur eaque laborum amet! Inventore, velit aperiam.",
}

export default function Organization(props: {
    id: string,
    image: string,
    name: string,
    description: string,
}) {
  return (
    <>
        <div className='container mx-auto flex flex-col items-center gap-y-12'>
            <h2 className='text-center font-black text-4xl lg:text-6xl capitalize'>Organization Name: {arr.name}</h2>
            <button className='w-full md:w-2/3 h-full flex justify-center'>
                <div className='w-[70%] sm:w-full h-full overflow-hidden flex flex-col sm:flex-row justify-start items-center border border-gray-500 rounded-xl shadow-xl'>
                    <div className='w-full h-full'>
                        <Image 
                            className='w-full h-full'
                            src={category1}
                            alt='Organization Image'
                        />
                    </div>
                    <div className='text-black p-4'>
                        <h3 className='font-black text-xl lg:text-4xl capitalize'>{arr.name}</h3>
                        <p className='text-xs md:text-base lg:text-xl'>{arr.description}</p>
                    </div>
                </div>
            </button>
        </div>
    </>
  )
}
