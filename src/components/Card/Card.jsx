import React from "react";
import styles from "./Card.module.css";

function Card({ type, children }) {
  return (
    <div className={`${styles.card} ${type === "answer" ? styles.answer : ""}`}>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}

export default Card;
