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


function App() {
  const [isQuestionShowing, setIsQuestionShowing] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isLottieShowing, setIsLottieShowing] = useState(false);
  const { flashcardsByTopic } = useContext(TopicContext);

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
      setQuestionNumber(0);
      return;
    }
    setQuestionNumber(questionNumber + x);
  }

  return (
    <>
      <Header>
        <CardNumber num={questionNumber + 1} total={flashcardsByTopic.length} />
      </Header>
      <OptionsGroup />
      <main style={{ position: "relative" }}>
        <Flashcard
          data={flashcardsByTopic[questionNumber]}
          isQuestionShowing={isQuestionShowing}
        />
        <ButtonContainer>
          <Button clickHandle={() => moveQuestionByX(-1)}>
            <ChevronLeft color="var(--clr-accent-400)" />
          </Button>
          <Button clickHandle={toggleQuestion}>
            {isQuestionShowing ? "Show Answer" : "Show Question"}
          </Button>
          <Button clickHandle={() => moveQuestionByX(1)}>
            <ChevronRight color="var(--clr-accent-400)" />
          </Button>
        </ButtonContainer>
        {isLottieShowing && <Lottie setIsLottieShowing={setIsLottieShowing} />}
      </main>
    </>
  );
}

export default App;
