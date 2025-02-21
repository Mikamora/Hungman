import { Wrapper, TopRow, MiddleRow, BottomRow } from "./styles";
import LetterButton, { IsCorrectTypes } from "./LetterButton/LetterButton";

interface KeyboardProps {
  onKeyClick: (letter: string) => IsCorrectTypes;
  isDisabled?: boolean;
}

const TRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const MRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const BRow = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = ({onKeyClick, isDisabled = false}: KeyboardProps) => {

  return (
    <Wrapper>
      <TopRow>
        {TRow.map((letter, index) => (
         <LetterButton key={`${letter}-${index}`} letter={letter} onClick={onKeyClick} isDisabled={isDisabled}/>
        ))}
      </TopRow>
      <MiddleRow>
        {MRow.map((letter, index) => (
         <LetterButton key={`${letter}-${index}`} letter={letter} onClick={onKeyClick} isDisabled={isDisabled}/>
        ))}
      </MiddleRow>
      <BottomRow>
      {BRow.map((letter, index) => (
         <LetterButton key={`${letter}-${index}`} letter={letter} onClick={onKeyClick} isDisabled={isDisabled}/>
        ))}
      </BottomRow>
    </Wrapper>
  )
};

export default Keyboard;