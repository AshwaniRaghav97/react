import React, { use, useState } from 'react'
import axios from 'axios'
const Api = () => {

  const [data,setData] = useState([]);

  async function call(){
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    // const data = await response.json();
    // console.log(data)

    const response = await axios.get("https://picsum.photos/v2/list")
    console.log(response.data);
    setData(response.data)
  }
  return (
    <div>
      <button onClick={call}>show data</button>
      <div>
        {data.map(function(ele,idx){
          return <div>
            <h3>{idx+ 1} - {ele.author}</h3>
            <h3> Height {ele.height}, width {ele.width}</h3>
          </div>
        })}
      </div>
    </div>
  )
}

export default Api