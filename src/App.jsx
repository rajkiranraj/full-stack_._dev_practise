import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Array from "./Array";
import Counter from "./Counter";
import PropsButton from "./PropsButton";
import UseControlledForm from "./UseControlledForm";
import UserefForm from "./UserefForm";
import Home from "./Components/Home";
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import Userdetails from "./Components/Userdetails";
import ApiQuestion from "./ApiQuestion";
import FormValidation from "./FormValidation";

function App() {
  return (
    <div className="p-2">
      <nav className="flex h-[12vh] w-full justify-center-safe items-center-safe bg-black text-white gap-20 rounded-lg ">
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "tomato" : "" };
          }}
          to="/"
        >
          Home
        </NavLink>
        <Link to="/About">About </Link>
        <Link to="/Contactus">Contact us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contactus" element={<Contactus></Contactus>}></Route>
        <Route
          path="/Userdetails/:name"
          element={<Userdetails></Userdetails>}
        ></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
      {/* <ApiQuestion></ApiQuestion> */}
      {/* <Counter></Counter> */}
      {/*  <Array></Array> */}
      {/* <PropsButton name="Button-1" alert="Butto-1 clicked"></PropsButton>
      <PropsButton name="Button-2" alert="Hi-👋"></PropsButton> */}
      {/* <UserefForm></UserefForm> */}
      {/* <UseControlledForm></UseControlledForm> */}
      <FormValidation></FormValidation>
    </div>
  );
}

export default App;
