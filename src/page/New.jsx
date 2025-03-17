import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import styles from "./New.module.css";
import Button from "../components/Button/Button";
import useProducts from "../hooks/useProducts";

export default function New() {
  const [product, setProduct] = useState({});
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const { addProduct } = useProducts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      const uploadPromises = files.map((file) => uploadImage(file));
      const urls = await Promise.all(uploadPromises);

      const productData = {
        ...product,
        images: urls,
        image: urls[0],
        hoverImage: urls[1],
      };
      await addProduct.mutate(
        { product: productData, imageUrls: urls },
        {
          onSuccess: () => {
            alert("🎉 Product addition completed! 🎉");
          },
          onError: () => {
            alert("Failed to add product. Please try again.");
          },
        }
      );
    } catch (error) {
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files: selectedFiles } = e.target;

    if (name === "file") {
      setFiles(Array.from(selectedFiles));
      return;
    }

    if (name === "price") {
      const numericValue = value.replace(/,/g, "");
      if (numericValue === "") {
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: "",
        }));
        return;
      }
      if (!isNaN(numericValue)) {
        const formattedValue = parseFloat(numericValue).toLocaleString();
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: formattedValue,
        }));
      }
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <div className="pt-5 w-100">
      <h6 className="text-center mx-5">New product registration </h6>
      <section className="mt-4 d-flex flex-column flex-md-row justify-content-md-around align-items-center">
        {files.map((file, index) => (
          <img
            key={index}
            id={styles.product_img}
            className="px-2 ms-md-2"
            src={URL.createObjectURL(file)}
            alt={`file-${index}`}
          />
        ))}
        <form className="d-flex flex-column p-5">
          <input
            type="file"
            accept="image/*"
            name="file"
            required
            multiple
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            value={product.title ?? ""}
            placeholder="name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            value={product.price ?? ""}
            placeholder="price"
            required
            onChange={handleChange}
          />
          <select
            name="section"
            value={product.section ?? ""}
            required
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              section
            </option>

            <option value="women">women</option>
            <option value="man">man</option>
          </select>
          <select
            name="category"
            value={product.category ?? ""}
            required
            placeholder="category"
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              category
            </option>
            <option value="coats&jackets">coats & jackets</option>
            <option value="top">top</option>
            <option value="pants">pants</option>
            <option value="skirt">skirt</option>
            <option value="dress">dress</option>
            <option value="knitwear">knitwear</option>
            <option value="acc">acc</option>
          </select>
          <input
            type="text"
            name="size"
            value={product.size ?? ""}
            placeholder="size [','로 구분]"
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            disabled={isUploading}
            text={isUploading ? "Uploading..." : "Upload"}
          />
        </form>
      </section>
    </div>
  );
}
