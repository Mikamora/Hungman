import { useState } from "react";
import { LetterContainer, LetterSpan } from "./Styles";

interface LetterProps {
    letter: string;
}

const Letter = ({ letter } : LetterProps) => {
    const [isCorrect, setIsCorrect] = useState(false);

  return (
    <LetterContainer>
      <LetterSpan $isCorrect={isCorrect} >{letter}</LetterSpan>
    </LetterContainer>
  )
};

export default Letter;
