import React, { useState } from "react";
import Products from "../components/Products/Products";
import Tab from "../components/Tab/Tab";
import TopButton from "../components/TopButton/TopButton";

export default function Women() {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className="pt-5 ">
      <Tab section="women" onCategoryChange={handleCategoryChange} />
      <Products section="women" category={category} />
      <TopButton />
    </div>
  );
}
