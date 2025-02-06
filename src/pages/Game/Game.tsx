import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import Category from "../../components/Category/Category";
import { GameDisplay, StickmanWrapper, AnswerWrapper, TopWrapper } from "./styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";

const Game = () => {
  const hangmanWord = "steak";
  const lettersGuessed = localStorage.getItem("lettersGuessed") || [];
  const lastGuessed = localStorage.getItem("lastGuessed") || "";
  
  const handleClick = (letter: string) => {
    if(hangmanWord?.toLowerCase().includes(letter.toLowerCase())) {
      return IsCorrectTypes.CORRECT;
    }
    return IsCorrectTypes.INCORRECT;
  }

  return (
    <div>
      <GameDisplay>
        <TopWrapper>
          <Timer>01:00</Timer>
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
          <Word word={hangmanWord}/>
        </AnswerWrapper>
      </GameDisplay>
      <Keyboard onKeyClick={handleClick}/>
    </div>
  )
};

export default Game;
