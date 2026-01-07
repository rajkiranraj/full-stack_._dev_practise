import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col p-10">
      <Link to="/Userdetails/rajkiran" className="font-bold">Rajkiran</Link>
      <Link to="/Userdetails/user_test" className="font-bold">User_test</Link>
      <Link to="/Userdetails/chatgpt" className="font-bold">Chatgpt</Link>
    </div>
  );
}

export default About;
