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
};

const LetterButton = ({ letter, onClick }: LetterButtonProps) => {
  const [isCorrect, setIsCorrect] = useState(IsCorrectTypes.UNPRESSED);
  const lettersGuessed = localStorage.getItem("lettersGuessed") || [];

  const handleClick = () => { 
    setIsCorrect(onClick(letter));
    localStorage.setItem("lettersGuessed", JSON.stringify([...lettersGuessed, letter]));
    localStorage.setItem("lastGuessed", letter);
  }

  return (
    <Letter 
      $isCorrect={isCorrect === IsCorrectTypes.CORRECT} 
      $isWrong={isCorrect === IsCorrectTypes.INCORRECT} 
      disabled={isCorrect !== IsCorrectTypes.UNPRESSED} 
      onClick={handleClick}>
        {letter}
    </Letter>
  )
};

export default LetterButton;