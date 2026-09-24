import React, { useState } from 'react'

const Notes = () => {

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [task,setTask] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,content})

    setTask(copyTask)

    setTitle("");
    setContent("");
  }
  return (
    <div className='h-full bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='flex items-start   p-10 flex-col gap-5' >
        <input className='px-5 w-full h-15 py-2 border-2 rounded outline-none font-medium' type="text" 
        placeholder='Enter Notes Hadding'
        value={title}
        onChange={(ele)=>{
          setTitle(ele.target.value);
        }}

        />
        
        <textarea 
        className='px-5 w-full h-30 py-2 border-2 rounded outline-none font-medium'
        type="text"
         placeholder='Enter the Data'
         value={content}
        onChange={(ele)=>{
          setContent(ele.target.value);
        }}
          />

          <button className='bg-white active:bg-gray-300 h-10 w-full text-black px-5 py2 rounded font-medium'>Add Notes</button>
      </form>

      <div className='flex flex-wrap p-10'>
        <div className='h-full w-full rounded-2xl bg-white '>
          {task.map(function(ele,idx){
            return <div key={idx}>
            <h1 className='text-black p-4 font-bold '>{ele.title}  <p className='text-black underline-none font-medium'>{ele.content}</p></h1>
          
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Notes