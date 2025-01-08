import React from "react";
import styles from "./User.module.css";

export default function User({ user: { photoURL, diplayName } }) {
  return (
    <div>
      <img
        id={styles.userImg}
        className="rounded-circle mx-2 "
        src={photoURL}
        alt={diplayName}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
