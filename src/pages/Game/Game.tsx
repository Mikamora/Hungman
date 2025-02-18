import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
// import Category from "../../components/Category/Category";
import { Wrapper, GameDisplay, KeyboardWrapper, StickmanWrapper, AnswerWrapper, TopWrapper } from "./styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";
import { useEffect, useState } from "react";

const Game = () => {
  const hangmanWord = "steak";
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [letterClicked, setLetterClicked] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [letterCounter, setLetterCounter] = useState(0);

  useEffect(() => {
    const isWordGuessed = hangmanWord.split('').every(letter => lettersGuessed.includes(letter.toUpperCase()));
    setIsPlaying(!isWordGuessed);
  }, [letterClicked]); 
  
  const handleClick = (letter: string) => {
    setLetterClicked(letter);
    setLettersGuessed([...lettersGuessed, letter]);
    if(hangmanWord?.toUpperCase().includes(letter)) {
      return IsCorrectTypes.CORRECT;
    }
    setLetterCounter(letterCounter + 1);
    if (letterCounter >= 6) {
      // Display the game over modal and stop the timer
      setIsPlaying(false);
      console.log("Too many guesses");
    }
    return IsCorrectTypes.INCORRECT;
  }

  return (
    <Wrapper>
      <GameDisplay>
        <TopWrapper>
          <Timer isPlaying={isPlaying}></Timer>
          {/* <Category>Category: Sports</Category> */}
          <Settings />
        </TopWrapper>
        {/* <Settings /> */}
        <AnswerWrapper>
          <StickmanWrapper >
            <Stickman  counter={letterCounter}/>
            <Gallows />
          </StickmanWrapper >
          {/* <word /> */}
          <Word word={hangmanWord} lettersGuessed={lettersGuessed}/>
        </AnswerWrapper>
      </GameDisplay>
      <KeyboardWrapper>
        <Keyboard lettersGuessed={lettersGuessed} onKeyClick={handleClick}/>
      </KeyboardWrapper>
    </Wrapper>
  )
};

export default Game;
