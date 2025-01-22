import React, { useEffect, useState } from "react";
import styles from "./TopButton.module.css";
import { GoMoveToTop } from "react-icons/go";

export default function TopButton() {
  const [showButton, setShowbutton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowbutton(true);
      } else {
        setShowbutton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  return (
    showButton && (
      <div
        id={styles.btnBox}
        className="position-fixed bottom-0 end-0 m-5 text-center fs-4 border border-1 border-black rounded-circle p-1"
        onClick={scrollTop}
      >
        <GoMoveToTop className="text-black" />
      </div>
    )
  );
}
