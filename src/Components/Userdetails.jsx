import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Userdetails() {
    const {name} = useParams()
  return (
    <div>
        <br /><br />
      <h1>Hi there welcome {name}</h1>
      <br />
      <Link to="/About" className="bg-blue-500 px-4 py-2 rounded-md text-white">
        Go back
      </Link>
    </div>
  );
}

export default Userdetails
