import { createContext, useContext, useState } from "react";
import FLASHCARDS_DATA from "../flashcards-data";
import flashcards from '../flashcards-two.js'
import { randomizeArray } from "../utils/sampleQuestion.js";
import { createTopicsObj } from "../utils/createTopics.js";
import { QuestionNumberContext } from "./QuestionNumberProvider.jsx";

export const TopicContext = createContext();

function TopicProvider({ children }) {
  const allFlashcards = randomizeArray(flashcards);
  const topics = createTopicsObj(flashcards);
  // const allFlashcards = randomizeArray(FLASHCARDS_DATA);
  // const topics = createTopicsObj(FLASHCARDS_DATA);
  const topicsKeysArray = Object.keys(topics);
  const firstTopic = topicsKeysArray[0];

  const [currentTopic, setCurrentTopic] = useState(firstTopic);
  const [flashcardsByTopic, setFlashcardsByTopic] = useState(() =>
    filterByCurrentTopic(currentTopic)
  );
  const { resetNumberToX } = useContext(QuestionNumberContext)

  function filterByCurrentTopic(selectedTopic) {
    const flashcardsByTopic = allFlashcards.filter(
      (element) => element.topic === topics[selectedTopic]
    );
    return flashcardsByTopic;
  }

  function changeTopic(value) {
    setCurrentTopic(value);
    setFlashcardsByTopic(filterByCurrentTopic(value));
    resetNumberToX(0);
  }

  const value = {
    topics,
    topicsKeysArray,
    currentTopic,
    setCurrentTopic,
    flashcardsByTopic,
    changeTopic,
  };

  return (
    <TopicContext.Provider value={value}>
      {children}
    </TopicContext.Provider>
  );
}

export default TopicProvider;
