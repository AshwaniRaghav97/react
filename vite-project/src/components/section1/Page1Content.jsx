import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1Content = () => {
  return (
    <div className="py-3 flex items-center gap-10 justify-between h-[90vh] bg-amber-950  px-18">

      <Left/>
      <Right/>
    </div>
  )
}

export default Page1Content