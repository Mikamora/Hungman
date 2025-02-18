import { Wrapper, TopRow, MiddleRow, BottomRow } from "./styles";
import LetterButton, { IsCorrectTypes } from "./LetterButton/LetterButton";

interface KeyboardProps {
  onKeyClick: (letter: string) => IsCorrectTypes;
  lettersGuessed: string[];
}

const TRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const MRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const BRow = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = ({onKeyClick}: KeyboardProps) => {

  return (
    <Wrapper>
      <TopRow>
        {TRow.map((letter, index) => (
         <LetterButton key={`${letter}-${index}`} letter={letter} onClick={onKeyClick}/>
        ))}
      </TopRow>
      <MiddleRow>
        {MRow.map((letter, index) => (
         <LetterButton key={`${letter}-${index}`} letter={letter} onClick={onKeyClick}/>
        ))}
      </MiddleRow>
      <BottomRow>
      {BRow.map((letter, index) => (
         <LetterButton key={`${letter}-${index}`} letter={letter} onClick={onKeyClick}/>
        ))}
      </BottomRow>
    </Wrapper>
  )
};

export default Keyboard;