import React, { useState } from 'react'

const Form = () => {
  const [a,b] = useState("");
  
  return (
    <div>
      <form onSubmit={(ele)=>{
        submitHandler(ele)
      }}>
        <input type="text" 
        placeholder='Enter your Name' 
        value={a} 
        onChange={(ele)=>{
          b(ele.target.value);
        }}
        />
        
        <button>Submit</button>
        <h1>{a}</h1>
      </form>
    </div>
  )
}

export default Form