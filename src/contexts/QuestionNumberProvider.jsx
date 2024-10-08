import { createContext, useState } from "react";

export const QuestionNumberContext = createContext();

function QuestionNumberProvider({children}) {
  const [questionNumber, setQuestionNumber] = useState(0);
  
  function resetNumberToX(x) {
    if(typeof x !== 'number'){
      throw new Error('Only use numbers as parameters');
    }
    setQuestionNumber(x)
  }

  const value = {
    questionNumber,
    resetNumberToX,
  }

  return (
    <QuestionNumberContext.Provider value={value}>
      {children}
    </QuestionNumberContext.Provider>
  )
}

export default QuestionNumberProvider;