import React from "react";

export default function Tab({ section }) {
  return (
    <>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page">
            All
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">coats & jackets</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">top</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">pants</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">skirt</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">dress</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">knitwear</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">acc</button>
        </li>
      </ul>
    </>
  );
}
