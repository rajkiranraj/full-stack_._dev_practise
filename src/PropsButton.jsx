import React from 'react'

function PropsButton(props) {
  return (
    <div>
      <button
        onClick={() => alert(props.alert)}
        className="px-4 py-2 bg-orange-600 font-extrabold rounded-lg hover:scale-110 transition-all ease-in-out"
      >
        {props.name}
      </button>
    </div>
  );
}

export default PropsButton
