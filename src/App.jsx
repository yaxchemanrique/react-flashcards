import { useState, useContext } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import { TopicContext } from "./contexts/TopicProvider.jsx";

import Header from "./components/Header/Header.jsx";
import OptionsGroup from "./components/OptionsGroup/OptionsGroup.jsx";
import Flashcard from "./components/Flashcard/Flashcard.jsx";
import Lottie from "./components/Lottie/Lottie.jsx";
import CardNumber from "./components/CardNumber/CardNumber.jsx";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer.jsx";
import Button from "./components/Button/Button.jsx";
import CollapsibleContent from "./components/CollapsibleContent/CollapsibleContent.jsx";
import { QuestionNumberContext } from "./contexts/QuestionNumberProvider.jsx";

function App() {
  const [isQuestionShowing, setIsQuestionShowing] = useState(true);
  const [isLottieShowing, setIsLottieShowing] = useState(false);
  const [areButtonsDisabled, setAreButtonDisabled] = useState(false);
  const { topics, currentTopic, flashcardsByTopic } = useContext(TopicContext);
  const { questionNumber, resetNumberToX } = useContext(QuestionNumberContext);

  function toggleQuestion() {
    setIsQuestionShowing((current) => !current);
  }

  function moveQuestionByX(x) {
    setIsQuestionShowing(true);
    if (x < 0 && questionNumber + x < 0) {
      return;
    }
    if (questionNumber + x >= flashcardsByTopic.length) {
      setIsLottieShowing(true);
      resetNumberToX(0);
      return;
    }
    resetNumberToX(questionNumber + x);
  }

  return (
    <>
      <Header>
        <CollapsibleContent
          title={`Select a topic:`}
          tag={topics[currentTopic]}
          key={currentTopic}
        >
          <OptionsGroup />
        </CollapsibleContent>
      </Header>
      <main style={{ position: "relative" }}>
        <CardNumber num={questionNumber + 1} total={flashcardsByTopic.length} />
        <Flashcard
          data={flashcardsByTopic[questionNumber]}
          isQuestionShowing={isQuestionShowing}
        />
        <ButtonContainer>
          <Button
            isDisabled={areButtonsDisabled}
            clickHandle={() => moveQuestionByX(-1)}
          >
            <ChevronLeft color="var(--clr-accent-400)" />
          </Button>
          <Button isDisabled={areButtonsDisabled} clickHandle={toggleQuestion}>
            {isQuestionShowing ? "Show Answer" : "Show Question"}
          </Button>
          <Button
            isDisabled={areButtonsDisabled}
            clickHandle={() => moveQuestionByX(1)}
          >
            <ChevronRight color="var(--clr-accent-400)" />
          </Button>
        </ButtonContainer>
        {isLottieShowing && (
          <Lottie
            setAreButtonDisabled={setAreButtonDisabled}
            setIsLottieShowing={setIsLottieShowing}
          />
        )}
      </main>
    </>
  );
}

export default App;
