import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiQuestion() {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const[val,setVal]=useState([]);
  useEffect(()=>{
    axios.get(api).then((val)=>setVal(val.data)).catch((err)=>console.error(err));
  },[])
  return (
    <div>
        {
            val.slice(0,5).map((item,index)=>{
               return <>
                  <h1 key={index}>{item.id}</h1>
                  <h1 key={index}>{item.title}</h1>
                  <h1 key={index}>{item.body}</h1>
                </>
            })
        }
    </div>
  )
}

export default ApiQuestion
