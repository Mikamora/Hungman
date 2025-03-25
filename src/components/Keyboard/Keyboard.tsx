import { Wrapper, TopRow, MiddleRow, BottomRow } from "./styles";
import LetterButton, { IsCorrectTypes } from "./LetterButton/LetterButton";

interface KeyboardProps {
  onKeyClick: (letter: string) => IsCorrectTypes;
  isDisabled?: boolean;
  reset?: boolean;
  dailyWord?: string;
}

const Keyboard = ({
  onKeyClick,
  isDisabled = false,
  reset,
  dailyWord,
}: KeyboardProps) => {
  const TRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const MRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const BRow = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <Wrapper>
      <TopRow>
        {TRow.map((letter, index) => (
          <LetterButton
            key={`${letter}-${index}`}
            letter={letter}
            onClick={onKeyClick}
            isDisabled={isDisabled}
            reset={reset}
            dailyWord={dailyWord}
          />
        ))}
      </TopRow>
      <MiddleRow>
        {MRow.map((letter, index) => (
          <LetterButton
            key={`${letter}-${index}`}
            letter={letter}
            onClick={onKeyClick}
            isDisabled={isDisabled}
            reset={reset}
            dailyWord={dailyWord}
          />
        ))}
      </MiddleRow>
      <BottomRow>
        {BRow.map((letter, index) => (
          <LetterButton
            key={`${letter}-${index}`}
            letter={letter}
            onClick={onKeyClick}
            isDisabled={isDisabled}
            reset={reset}
            dailyWord={dailyWord}
          />
        ))}
      </BottomRow>
    </Wrapper>
  );
};

export default Keyboard;
