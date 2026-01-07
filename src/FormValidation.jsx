import React, { useState } from 'react'

function FormValidation() {
    let [val, setVal] = useState({ name: "", email: "", password: "" });
    let [err,setErr] = useState("")
    let handleChange = (e) => {
      setVal({ ...val, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const regex = /^[a-zA-Z0-9]{8,}$/;
        if(!val.email.trim()||!val.name.trim()||!val.password){setErr("All fields are mandatory");return;}
        if(!val.email.includes('@')){setErr("Enter email including @");return;}
        if(!regex.test(val.password)){setErr("Please Enter a valid password");return;}
        setErr("");
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className='flex flex-col pt-20 justify-center items-center gap-5'>
    <input type='text' placeholder='Enter the name' value={val.name} name='name' onChange={handleChange} className='border border-b-lime-500'></input>
    <input type='text' placeholder='Enter the email' value={val.email} name='email' onChange={handleChange} className='border border-b-lime-500'></input>
    <input type='password' placeholder='Enter the password' value={val.password} name='password' onChange={handleChange} className='border border-b-lime-500'></input>
    <button >Login</button>
    {err?<p className='text-2xl text-red-600'>{err}</p>:" "}
    </form> 
    </div>
  )
}

export default FormValidation
