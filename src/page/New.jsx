import React, { useState } from "react";

export default function New() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  //   function inputNumberFormat(obj) {
  //     obj = comma(uncomma(obj));
  //     return obj;
  //   }
  //   const inputNumberFormat = (obj) => {
  //     console.log(obj);

  //     const price = Number(obj.replace(/[^0-9]/g, "")).toLocaleString();
  //     return price;
  //   };

  function inputNumberFormat({ price }) {
    const priceComma = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return priceComma;
  }

  function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  }

  function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  }

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section className="pt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="Product_name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ""}
          placeholder="Price"
          required
          onChange={handleChange}
          onKeyUp={(e) => {
            inputNumberFormat(e.target.value);
          }}
        />
        <input
          type="text"
          onKeyUp={(e) => {
            console.log(e.target.value);
          }}
        />
      </form>
    </section>
  );
}
