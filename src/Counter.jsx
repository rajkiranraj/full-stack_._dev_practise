import { useState } from 'react'

function Counter() {
  // This state holds the numeric value shown by the counter.
  // We initialize it to 0 so the counter starts at zero.
  const [state, setState] = useState(0);

  // This state controls the color of the counter text. We store
  // a small string that we map to Tailwind color classes below.
  const [color, setColor] = useState("white");
  //Added states

  return (
    <>
      {/* Container: center everything horizontally and vertically */}
      <div className="flex w-screen h-screen justify-center items-center flex-col bg-black">
        {/*
          The heading displays the numeric counter. We use a small
          conditional expression to pick a Tailwind text color class
          based on the `color` state. Keep in mind we compare with
          `==` here because this code mirrors the original; if you
          prefer stricter checks we can switch to `===`.
        */}
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

        {/* Buttons to increment and decrement the counter. Each button
            updates the numeric state *and* sets a color to give a
            visual cue (yellow for increment, red for decrement). */}
        <div className="flex gap-4">
          <button
            className="text-white rounded-lg p-2 px-8 bg-orange-600 hover:scale-110 transition-all ease-in-out"
            onClick={() => {
              // Use the functional form of setState so we always operate
              // on the latest value (avoids issues with stale closures).
              setState((prev) => prev + 1);
              // Change the text color to a warm/yellow tone when adding.
              setColor("yellow");
            }}
          >
            Add
          </button>
          <button
            className="text-white px-8 p-2 bg-green-300 rounded-lg hover:scale-110 transition-all ease-in-out"
            onClick={() => {
              // Decrement the counter safely using the functional updater.
              setState((prev) => prev - 1);
              // Use a red color to indicate subtraction.
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
