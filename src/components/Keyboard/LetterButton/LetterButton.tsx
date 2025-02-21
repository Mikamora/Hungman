import { useState } from "react";
import { Letter } from "./styles";

export enum IsCorrectTypes {
  UNPRESSED = "Unpressed",
  CORRECT = "Correct",
  INCORRECT = "Incorrect"
}

interface LetterButtonProps {
  letter: string;
  onClick: (letter: string) => IsCorrectTypes;
  isDisabled?: boolean;
};

const LetterButton = ({ letter, onClick, isDisabled = false }: LetterButtonProps) => {
  const [isCorrect, setIsCorrect] = useState(IsCorrectTypes.UNPRESSED);

  const handleClick = () => { 
    setIsCorrect(onClick(letter));
  }

  return (
    <Letter 
      $isCorrect={isCorrect === IsCorrectTypes.CORRECT} 
      $isWrong={isCorrect === IsCorrectTypes.INCORRECT} 
      disabled={isCorrect !== IsCorrectTypes.UNPRESSED || isDisabled} 
      onClick={handleClick}>
        {letter}
    </Letter>
  )
};

export default LetterButton;