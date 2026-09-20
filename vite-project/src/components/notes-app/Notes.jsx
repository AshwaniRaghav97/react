import React, { useState } from 'react'

const Notes = () => {

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [task,setTask] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    setTitle("");
    setContent("");
  }
  return (
    <div className='h-screen bg-black text-white'>
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

          <button className='bg-white h-10 w-full text-black px-5 py2 rounded font-medium'>Add Notes</button>
      </form>

      <div className='flex flex-wrap p-10'>
        <div className='h-40 w-full rounded-2xl bg-white '>
          <h1 className='text-black p-4 font-bold underline'>{title}</h1>
          <p className='text-black'>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Notes