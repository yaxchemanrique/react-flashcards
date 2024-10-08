import { createContext, useContext, useState } from "react";
import FLASHCARDS_DATA from "../flashcards-data";
import flashcards from "../flashcards-two.js";
import { randomizeArray } from "../utils/sampleQuestion.js";
import { QuestionNumberContext } from "./QuestionNumberProvider.jsx";

export const TopicContext = createContext();

function TopicProvider({ children }) {
  const allFlashcards = randomizeArray(flashcards);
  const initialTopics = createInitialTopics(allFlashcards);
  const [topics, setTopics] = useState(initialTopics);
  const [flashcardsBySelectedTopics, setFlashcardsBySelectedTopics] = useState(
    () => filterBySelectedTopics(initialTopics)
  );
  const numberOfQuestionsByTopic = calculateNumberOfQuestionsByTopic()
  console.log(numberOfQuestionsByTopic)

  function calculateNumberOfQuestionsByTopic() {
    let numberOfQuestionsByTopic = {};
    const repeatedTopics = allFlashcards.map(card => card.topic.id);
    repeatedTopics.forEach((str) => {
      numberOfQuestionsByTopic[str] = repeatedTopics.filter(e => e === str).length
    });

    return numberOfQuestionsByTopic
  }

  function createInitialTopics(arr) {
    let allTopics = [];
    let tempIds = []
    for (let i = 0; i < arr.length; i++) {
      const card = arr[i];
      const topic = {
        id: card.topic.id,
        label: card.topic.label,
        isChecked: i === 0 ? true : false,
      };
      if(i === 0) {
        tempIds.push(card.topic.id);
        allTopics.push(topic);
        continue;
      }
      if (!tempIds.includes(card.topic.id)) {
        tempIds.push(card.topic.id)
        allTopics.push(topic);
      }
    }
    return allTopics;
  }
  
  const { resetNumberToX } = useContext(QuestionNumberContext);

  function filterBySelectedTopics(currentTopics) {
    const selectedTopics = currentTopics.filter((el) => el.isChecked);
    const selectedTopicsArr = selectedTopics.map((el) => el.id);

    const flashcardsBySelectedTopics = allFlashcards.filter(
      (element) => selectedTopicsArr.includes(element.topic.id)
    );
    return flashcardsBySelectedTopics;
  }

  function updateTopics(val) {
    setTopics(val);
    setFlashcardsBySelectedTopics(filterBySelectedTopics(val));
    resetNumberToX(0);
  }

  const value = {
    allFlashcards,
    topics,
    updateTopics,
    flashcardsBySelectedTopics,
    numberOfQuestionsByTopic,
  };

  return (
    <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
  );
}

export default TopicProvider;
