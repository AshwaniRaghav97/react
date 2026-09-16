import React from 'react'

import {ArrowUpRight} from 'lucide-react'
import RightCard from './RightCard'

const Right = (props) => {
  return (
    <div className="h-full flex flex-nowrap w-2/3  bg-blue-200  rounded-2xl">
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Right