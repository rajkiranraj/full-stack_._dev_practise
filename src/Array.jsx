import React, { useState } from 'react'

function Array() {
  const [val,setVal] = useState([1,2,3,4,5,6])
  return (
    <div className='flex flex-col p-20 w-full h-screen bg-black text-white'>
    {
      val.map(value=><h1>{value}</h1>)
    }
    <button onClick={()=>setVal(()=>val.filter((item,index)=>index!=val.length-1 ))}>Remove Last element</button>
    </div>
  )
}

export default Array
