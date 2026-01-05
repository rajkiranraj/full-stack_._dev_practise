import React, { useRef } from 'react'

function UserefForm() {
    const name = useRef(null)
    const age = useRef(null)
    const email = useRef(null)
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(name.current.value)
    }
  return (
    <div className="bg-black text-white  w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col border-amber-300" >
        <input type="text" placeholder="Enter the name" ref={name}></input>
        <input type="number" placeholder="Enter the Age " ref={age} />
        <input type="email" placeholder="Enter the email" ref={email}></input>
        <button>Submit the form</button>
      </form>
    </div>
  );
}

export default UserefForm
