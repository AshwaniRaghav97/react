import React from 'react'
import axios from 'axios'
const Api = () => {
  async function call(){
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    // const data = await response.json();
    // console.log(data)

    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={call}>show data</button>
    </div>
  )
}

export default Api