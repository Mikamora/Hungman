import { Wrapper, TopRow, MiddleRow, BottomRow } from "./styles";
import LetterButton, { IsCorrectTypes } from "./LetterButton/LetterButton";

interface KeyboardProps {
  hangmanWord?: string;
}

const TRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const MRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const BRow = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = ({hangmanWord = "Hello"}: KeyboardProps) => {

  const handleClick = (letter: string) => {
    if(hangmanWord?.toLowerCase().includes(letter.toLowerCase())) {
      return IsCorrectTypes.CORRECT;
    }
    return IsCorrectTypes.INCORRECT;
  }

  return (
    <Wrapper>
      <TopRow>
        {TRow.map((letter) => (
         <LetterButton letter={letter} onClick={handleClick}/>
        ))}
      </TopRow>
      <MiddleRow>
        {MRow.map((letter) => (
         <LetterButton letter={letter} onClick={handleClick}/>
        ))}
      </MiddleRow>
      <BottomRow>
      {BRow.map((letter) => (
         <LetterButton letter={letter} onClick={handleClick}/>
        ))}
      </BottomRow>
    </Wrapper>
  )
};

export default Keyboard;