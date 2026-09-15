import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCard = () => {
  return (
    <div className="h-full relative overflow-hidden  p-6 w-60 rounded-3xl">
      <img className='h-full w-full  object-cover rounded-2xl' src="https://i.pinimg.com/474x/ec/43/55/ec4355c60b1c964553007553c2f777d4.jpg" alt="Nature" />

      <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center">1</h2>
        <div>
          <p className='text-small  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet iusto dolore provident beatae eius.</p>
          <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-medium px-6 py-2 rounded-full '>Satisfied</button>
          <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><MoveRight /></button>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default RightCard