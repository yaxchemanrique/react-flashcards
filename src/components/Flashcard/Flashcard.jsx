import React from "react";
import formatTextWithCode from "../../utils/formatTextWithCode.jsx";
import Card from "../Card/Card.jsx";
import styles from "./Flashcard.module.css";

function Flashcard({ data, isQuestionShowing }) {
  return (
    <div className={styles.flashcard}>
      <p className={styles.tag}>{data.category}</p>
      {isQuestionShowing ? (
        <Card type="question">{formatTextWithCode(data.question, styles)}</Card>
      ) : (
        <Card type="answer">{formatTextWithCode(data.answer, styles)}</Card>
      )}
    </div>
  );
}

export default Flashcard;
