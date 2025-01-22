import React, { useState } from "react";
import Tab from "../components/Tab/Tab";
import Products from "../components/Products/Products";

export default function Man() {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className="pt-5">
      <Tab section="man" onCategoryChange={handleCategoryChange} />
      <Products section="man" category={category} />
    </div>
  );
}
