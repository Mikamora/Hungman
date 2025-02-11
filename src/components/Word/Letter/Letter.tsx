import { useState } from "react";
import { LetterContainer, LetterSpan } from "./styles";

interface LetterProps {
    word: string;
    letter: string;
    lettersGuessed: string[] | null;
}

const Letter = ({ word, letter, lettersGuessed } : LetterProps) => {
  {console.log(lettersGuessed)}

  return (
    <LetterContainer>
      {lettersGuessed && <LetterSpan $isCorrect={lettersGuessed.includes(letter) && word.includes(letter)} >{letter}</LetterSpan>}
    </LetterContainer>
  )
};

export default Letter;
