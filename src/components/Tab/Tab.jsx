import React, { useState } from "react";

export default function Tab({ section, onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleTabClick = (category) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const tabs = [
    { label: "All", value: "all" },
    { label: "Coats & Jackets", value: "coats&jackets" },
    { label: "Top", value: "top" },
    { label: "Pants", value: "pants" },
    ...(section !== "man"
      ? [
          { label: "Skirt", value: "skirt" },
          { label: "Dress", value: "dress" },
        ]
      : []),
    { label: "Knitwear", value: "knitwear" },
    { label: "Acc", value: "acc" },
  ];

  return (
    <ul className="nav nav-underline flex justify-content-center my-4 fs-6">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab.value}>
          <button
            className={`nav-link text-body-emphasis ${
              activeCategory === tab.value ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
