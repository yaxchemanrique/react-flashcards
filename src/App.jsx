import { useState } from "react";
import FLASHCARD_DATA from "../src/flashcards-data.js";
import { ChevronLeft, ChevronRight } from "react-feather";
import { randomizeArray } from "../src/utils/sampleQuestion.js";
import Header from "./components/Header/Header.jsx";
import Flashcard from "./components/Flashcard/Flashcard.jsx";
import Lottie from "./components/Lottie/Lottie.jsx";
import CardNumber from "./components/CardNumber/CardNumber.jsx";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer.jsx";
import Button from "./components/Button/Button.jsx";

const flashcards = randomizeArray(FLASHCARD_DATA);

function App() {
  const [isQuestionShowing, setIsQuestionShowing] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isLottieShowing, setIsLottieShowing] = useState(false)

  function toggleQuestion() {
    setIsQuestionShowing((current) => !current);
  }

  function moveQuestionByX(x) {
    setIsQuestionShowing(true);
    if(x < 0 && questionNumber + x < 0) {
      return;
    }
    if(questionNumber + x >= flashcards.length) {
      setIsLottieShowing(true)
      setQuestionNumber(0);
      return;
    }
    setQuestionNumber(questionNumber + x);
  }

  return (
    <>
      <Header>
        <CardNumber num={questionNumber + 1} total={flashcards.length}/>
      </Header>
      <main style={{position: 'relative'}}>
        <Flashcard
          data={flashcards[questionNumber]}
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
        {isLottieShowing && <Lottie setIsLottieShowing={setIsLottieShowing}/>}
      </main>
    </>
  );
}

export default App;
