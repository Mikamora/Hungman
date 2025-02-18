import { LetterContainer, LetterSpan } from "./styles";

interface LetterProps {
    word: string;
    letter: string;
    lettersGuessed: string[] | null;
}

const Letter = ({ word, letter, lettersGuessed } : LetterProps) => {

  return (
    <LetterContainer>
      {lettersGuessed && <LetterSpan $isCorrect={lettersGuessed.includes(letter.toUpperCase()) && word.includes(letter)} >{letter}</LetterSpan>}
    </LetterContainer>
  )
};

export default Letter;
