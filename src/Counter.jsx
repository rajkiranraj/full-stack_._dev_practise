import { useState } from 'react'

function Counter() {
  // count
  const [state, setState] = useState(0);

  // color
  const [color, setColor] = useState("white");

  return (
    <>
      {/* container */}
      <div className="flex w-screen h-screen justify-center items-center flex-col bg-black">
        {/* display */}
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

        {/* actions */}
        <div className="flex gap-4">
          <button
            className="text-white rounded-lg p-2 px-8 bg-orange-600 hover:scale-110 transition-all ease-in-out"
            onClick={() => {
              // add
              setState((prev) => prev + 1);
              // yellow
              setColor("yellow");
            }}
          >
            Add
          </button>
          <button
            className="text-white px-8 p-2 bg-green-300 rounded-lg hover:scale-110 transition-all ease-in-out"
            onClick={() => {
              // sub
              setState((prev) => prev - 1);
              // red
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
