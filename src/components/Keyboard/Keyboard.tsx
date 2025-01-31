import { Wrapper, TopRow, MiddleRow, BottomRow, LetterButton } from "./styles";

const Keyboard = ({}) => {
  return (
    <Wrapper> 
        <TopRow>
            <LetterButton>Q</LetterButton>
            <LetterButton>W</LetterButton>
            <LetterButton>E</LetterButton>
            <LetterButton>R</LetterButton>
            <LetterButton>T</LetterButton>
            <LetterButton>Y</LetterButton>
            <LetterButton>U</LetterButton>
            <LetterButton>I</LetterButton>
            <LetterButton>O</LetterButton>
            <LetterButton>P</LetterButton>
        </TopRow>
        <MiddleRow>
            <LetterButton>A</LetterButton>
            <LetterButton>S</LetterButton>
            <LetterButton>D</LetterButton>
            <LetterButton>F</LetterButton>
            <LetterButton>G</LetterButton>
            <LetterButton>H</LetterButton>
            <LetterButton>J</LetterButton>
            <LetterButton>K</LetterButton>
            <LetterButton>L</LetterButton>
        </MiddleRow>
        <BottomRow>
            <LetterButton>Z</LetterButton>
            <LetterButton>X</LetterButton>
            <LetterButton>C</LetterButton>
            <LetterButton>V</LetterButton>
            <LetterButton>B</LetterButton>
            <LetterButton>N</LetterButton>
            <LetterButton>M</LetterButton>
        </BottomRow>
    </Wrapper>
  )
};

export default Keyboard;