import "./App.css";
import Array from "./Array";
import Counter from "./Counter";
import PropsButton from "./PropsButton";
import UseControlledForm from "./UseControlledForm";
import UserefForm from "./UserefForm";

function App() {
  return (
    <div className="flex h-full w-full justify-center items-center flex-col gap-2">
      {/* <Counter></Counter> */}
      {/*  <Array></Array> */}
      {/* <PropsButton name="Button-1" alert="Renu eh thopu nik ela tips cheptham cheppu🤭"></PropsButton>
      <PropsButton name="Button-2" alert="Hi-👋"></PropsButton> */}
      {/* <UserefForm></UserefForm> */}
      <UseControlledForm></UseControlledForm>
    </div>
  );
}

export default App;
