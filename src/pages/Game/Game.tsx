import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import Category from "../../components/Category/Category";
import { GameDisplay, StickmanWrapper, AnswerWrapper, TopWrapper } from "./styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";
import { useEffect, useState } from "react";

const Game = () => {
  const hangmanWord = "steak";
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [letterClicked, setLetterClicked] = useState("");

  useEffect(() => {
    setLettersGuessed([...lettersGuessed, letterClicked])
  }, [letterClicked]);
  
  const handleClick = (letter: string) => {
    setLetterClicked(letter);
    if(hangmanWord?.toUpperCase().includes(letter)) {
      return IsCorrectTypes.CORRECT;
    }
    return IsCorrectTypes.INCORRECT;
  }

  return (
    <div>
      <GameDisplay>
        <TopWrapper>
          <Timer></Timer>
          <Category>Category: Sports</Category>
          <Settings />
        </TopWrapper>
        {/* <Settings /> */}
        <AnswerWrapper>
          <StickmanWrapper >
            <Stickman />
            <Gallows />
          </StickmanWrapper >
          {/* <word /> */}
          <Word word={hangmanWord} lettersGuessed={lettersGuessed}/>
        </AnswerWrapper>
      </GameDisplay>
      <Keyboard lettersGuessed={lettersGuessed} onKeyClick={handleClick}/>
    </div>
  )
};

export default Game;
