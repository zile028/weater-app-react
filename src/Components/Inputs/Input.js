import React, { useRef } from "react";

function Input({ setCity }) {
  const inputCity = useRef();
  return (
    <div className="container input-holder">
      <input ref={inputCity} type="text" />
      <button className="btn" onClick={(e) => setCity(inputCity.current.value)}>
        Find
      </button>
    </div>
  );
}

export default Input;
