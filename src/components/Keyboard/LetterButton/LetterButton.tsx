import { useEffect, useState } from "react";
import { Letter } from "./styles";

export enum IsCorrectTypes {
  UNPRESSED = "Unpressed",
  CORRECT = "Correct",
  INCORRECT = "Incorrect",
}

interface LetterButtonProps {
  letter: string;
  onClick: (letter: string) => IsCorrectTypes;
  isDisabled?: boolean;
  reset?: boolean;
  dailyWord?: string;
}

const LetterButton = ({
  letter,
  onClick,
  isDisabled = false,
  reset,
  dailyWord,
}: LetterButtonProps) => {
  const [isCorrect, setIsCorrect] = useState(IsCorrectTypes.UNPRESSED);

  useEffect(() => {
    reset && setIsCorrect(IsCorrectTypes.UNPRESSED);
  }, [reset]);

  const onLoad = () => {
    if (dailyWord) {
      let lettersGuessed = JSON.parse(
        window.localStorage.getItem("lettersGuessed") || '""'
      );
      if (lettersGuessed.includes(letter.toUpperCase())) {
        if (dailyWord?.toUpperCase().includes(letter?.toUpperCase())) {
          setIsCorrect(IsCorrectTypes.CORRECT);
        } else {
          setIsCorrect(IsCorrectTypes.INCORRECT);
        }
      }
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const handleClick = () => {
    setIsCorrect(onClick(letter));
  };

  return (
    <Letter
      $isCorrect={isCorrect === IsCorrectTypes.CORRECT}
      $isWrong={isCorrect === IsCorrectTypes.INCORRECT}
      disabled={isCorrect !== IsCorrectTypes.UNPRESSED || isDisabled}
      onClick={handleClick}
    >
      {letter}
    </Letter>
  );
};

export default LetterButton;
