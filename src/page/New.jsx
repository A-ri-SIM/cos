import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";
import styles from "./New.module.css";

export default function New() {
  const [product, setProduct] = useState({});
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    // uploadImage(file)
    //   .then((url) => {
    //     addNewProduct(product, url).then(() => {
    //       alert(`🎉 Product addition completed! 🎉`);
    //     });
    //   })
    //   .finally(() => setIsUploading(false));
    try {
      const uploadPromises = files.map((file) => uploadImage(file));
      const urls = await Promise.all(uploadPromises);
      console.log(urls);
      if (!Array.isArray(urls) || urls.length < 2) {
        throw new Error(
          "이미지 업로드 실패: 최소 2개의 유효한 URL이 필요합니다."
        );
      }
      const imageUrl1 = urls[0];
      const imageUrl2 = urls[1];
      await addNewProduct(product, [imageUrl1, imageUrl2]);
      alert(`🎉 Product addition completed! 🎉`);
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
      alert("이미지 업로드에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files: selectedFiles } = e.target;
    // if (name === "file") {
    //   setFile(files && files[0]);
    //   return;
    // }
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
        {/* {file && (
          <img
            id={styles.product_img}
            className="px-5 ms-md-4"
            src={URL.createObjectURL(file)}
            alt="local file"
          />
        )} */}
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
          <button
            type="button"
            className="btn btn-outline-dark mt-4"
            onClick={handleSubmit}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </section>
    </div>
  );
}
