import React from "react";
import Products from "../components/Products/Products";
import Tab from "../components/Tab/Tab";

export default function Women() {
  return (
    <div className="pt-5">
      <Tab />
      <Products section="women" />
    </div>
  );
}
