import { useState } from 'react'

function Counter() {
  const [state, setState] = useState(0);
  const [color, setColor] = useState("white");
  //Added states
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center flex-col bg-black">
        <h1
          className={`text-2xl ${
            color == "white"
              ? "text-white"
              : color == "yellow"
              ? "text-amber-300"
              : "text-red-600"
          }`}
        >
          {state}
        </h1>
        <br />
        <div className="flex gap-4">
          <button
            className="text-white rounded-lg p-2 px-8 bg-orange-600 hover:scale-110 transition-all ease-in-out"
            onClick={() => {
              setState((prev) => prev + 1);
              setColor("yellow");
            }}
          >
            Add
          </button>
          <button
            className="text-white px-8 p-2 bg-green-300 rounded-lg hover:scale-110 transition-all ease-in-out"
            onClick={() => {
              setState((prev) => prev - 1);
              setColor("red");
            }}
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter
