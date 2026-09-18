import React, { useState } from 'react'

const UseStates = () => {
  const [a, seta] = useState(0);
  const inc=()=>{
    seta(a+1);
  }

  const dec=()=>{
    seta(a-1);
  }
  return (
    <>
    <h1>{a}</h1>
    <button onClick={inc}>Increase</button>
    <button onClick={dec}>Decrease</button>

    </>
  )
}

export default UseStates