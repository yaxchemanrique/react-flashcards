import React from "react";
import styles from "./Card.module.css";

function Card({ type, children }) {
  return (
    <div 
      className={`${styles.card} ${type === "answer" ? styles.answer : ""}`}
      >
      {children}
    </div>
  );
}

export default Card;
