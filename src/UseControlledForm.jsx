import React, { useState } from "react";

function UseControlledForm() {
  const [val, setVal] = useState({ name: "",email:"",age:"" });
  const Onsubmit = (e)=>{
    e.preventDefault();
    console.log(val.name);
    console.log(`email: ${val.email}\n`);
    console.log(val.age)
  }
  return (
    <div>
      <form onSubmit={Onsubmit} className="flex flex-col gap-7">
        <input type="text" value={val.name} placeholder="Enter ur name" onChange={(e)=>setVal({...val,name:e.target.value})} className="rounded-md border border-blue-900"></input>
        <input type="email" value={val.email} placeholder="Enter ur mail" onChange={(e)=>setVal({...val,email:e.target.value})}className="rounded-md border border-blue-500"></input>
        <input type="number" value={val.age} placeholder="Enter ur age" onChange={(e)=>setVal({...val,age:e.target.value})}className="rounded-md border border-blue-500"></input>
        <button className="rounded-lg border border-rose-500 bg-blue-500">Submit</button>
      </form>
    </div>
  );
}

export default UseControlledForm;
