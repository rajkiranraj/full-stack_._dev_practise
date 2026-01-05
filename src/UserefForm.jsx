import React, { useRef } from 'react'

function UserefForm() {
    const name = useRef(null)
    const age = useRef(null)
    const email = useRef(null)
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(`The Entered name is ${name.current.value} & 
                    The Entered age is ${age.current.value}
                    The Entered email is ${email.current.value}`);
    }
  return (
    <div className="bg-black text-white  w-full h-screen ">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8 border-amber-300" >
        <input type="text" placeholder="Enter the name" id='name'ref={name}></input>
        <input type="number" placeholder="Enter the Age " id='number' ref={age} />
        <input type="email" placeholder="Enter the email" ref={email} id='email'></input>
        <button>Submit </button>
      </form>
    </div>
  );
}

export default UserefForm
