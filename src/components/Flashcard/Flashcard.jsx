import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Flashcard.module.css";

function Flashcard({ data, isQuestionShowing }) {
  console.log(data)
  return (
    <div className={styles.flashcard}>
      <p className={styles.tag}>{data.category}</p>
      {isQuestionShowing ? (
        <Card type="question">{data.question}</Card>
      ) : (
        <Card type="answer">{data.answer}</Card>
      )}
    </div>
  );
}

export default Flashcard;
