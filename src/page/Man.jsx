import React from "react";
import Tab from "../components/Tab/Tab";
import Products from "../components/Products/Products";

export default function Man() {
  return (
    <div className="pt-5">
      <Tab />
      <Products section="man" />
    </div>
  );
}
