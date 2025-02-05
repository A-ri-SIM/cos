import React from "react";

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      type="button"
      className="btn btn-outline-dark mt-4"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
