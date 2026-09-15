import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const Left = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 bg-blue-200 rounded-2xl ">
      <div className='p-6'>
        <h3 className="mb-7 leading-15 text-5xl font-bold">Prosepective <br /> <span className="bg-gray-200 rounded-full px-6">
          Customer</span> <br />Segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consequatur corporis explicabo cupiditate aliquam magni praesentium facere.</p>
      </div>
      <div className="text-8xl">
        <ArrowUpRight />
        </div>
            <div></div>
    </div>
  )
}

export default Left