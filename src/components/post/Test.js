import React from "react";

function Test({ setAnyChange }) {
  return (
    <div>
      <button
        onClick={() => {
          setAnyChange(true);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Test;
