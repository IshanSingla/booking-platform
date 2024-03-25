import React from 'react'
import Image from "next/image"
import category1 from '@/assets/category1.png';
import ListOrganization from '@/components/dialers/listOrganization';
import { categoryType } from '@/types/category';
import Page from '..';
import GlobalLayout from '@/layout/global';

let arr: categoryType[] = [{
  id: '88',
  image: category1,
  name: 'hello',
  description: 'bla bla bla'
}, {
  id: '89',
  image: category1,
  name: 'hello',
  description: 'bla bla bla'
}, {
  id: '89',
  image: category1,
  name: 'hello',
  description: 'bla bla bla'
}, {
  id: '89',
  image: category1,
  name: 'hello',
  description: 'bla bla bla'
}, {
  id: '89',
  image: category1,
  name: 'hello',
  description: 'bla bla bla'
}];

function App() {
  return (
    <>
      <section id='Category' className='w-full h-full flex flex-col gap-6 bg-white'>
        <div className='h-10'></div>
        <div className='text-center font-bold text-4xl'>Category</div>
        <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 p-3 '>
          {arr.map((card, index) => {
            return (
              <ListOrganization
                key={index}
                data={card}
              />
            );
          })}
        </div>
      </section>
    </>
  )
}
App.getLayout = GlobalLayout
export default App;