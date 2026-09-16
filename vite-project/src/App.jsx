import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users =[
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlT1EtDEdgnUJEwt8lPc1Msynsea9uAcPB9uTZl-l0A&s=10',
      intro:'',
      tag:'Satisefieded'
    },
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyES1ZyDnhnDreZqUGok83RDnX42XItMUrp2coknKrFw&s=10',
      intro:'',
      tag:'Undersubed'
    },
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH_L6jXxhU8XB96s-5p9aGar4YQQ_DTUw-FMK-tX1GQ&s=10',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <>
      <Section1 users={users}/>
      <Section2 />
    </> 
  
  )
}

export default App
