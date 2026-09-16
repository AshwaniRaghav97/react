import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCard = (props) => {
  return (
    <div className="h-full relative overflow-hidden  p-2 w-60 rounded-3xl">
      <img className='h-full w-full  object-cover rounded-2xl' src={props.img} alt="Nature" />

      <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center">{props.id+1}</h2>
        <div>
          <p className='text-small  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet iusto dolore provident beatae eius.</p>
          <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-small px-2 py-2   rounded-full '>{props.tag}</button>
          <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><MoveRight /></button>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default RightCard