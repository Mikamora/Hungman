import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import * as randomWords from 'random-words';
// import Category from "../../components/Category/Category";
import { Wrapper, GameDisplay, KeyboardWrapper, StickmanWrapper, AnswerWrapper, TopWrapper } from "./styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";
import { useEffect, useState } from "react";

const Game = () => {
  // @ts-expect-error - wordList is misspelled in the types provided in the package
  const words = randomWords.wordList;
  const generate = randomWords.generate;
  const [hangmanWord] = useState(generate(1)[0]);
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [letterClicked, setLetterClicked] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [wrongLetters, setWrongLetters] = useState(0);

  useEffect(() => {
    if(wrongLetters >= 7) return setIsPlaying(false);
    const isWordGuessed = hangmanWord.split('').every(letter => lettersGuessed.includes(letter.toUpperCase()));
    setIsPlaying(!isWordGuessed);
    getDailyWord();
  }, [letterClicked]); 

  const getDailyWord = () => {
  // last 2 digits of year * day + m (find the max the year can be and add a cap, maybe 60. Once that happens, start using a different equation) - also if the result begins with a 0, remove that 0. Indexes cant start with a 0, unless they are 0
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    // 25 * 20 + 2 = 502;
    // 25 * 31 + 12 = 787;
    // 60 * 31 + 12 = 1748;

    if (year === 2025 && month == 4 && day == 30) {
      return(words[0]);
    }

  }

  const handleClick = (letter: string) => {
    setLetterClicked(letter);
    setLettersGuessed([...lettersGuessed, letter]);
    if(hangmanWord?.toUpperCase().includes(letter)) {
      return IsCorrectTypes.CORRECT;
    }
    setWrongLetters(wrongLetters + 1);
    return IsCorrectTypes.INCORRECT;
  }

  return (
    <Wrapper>
      <GameDisplay>
        <TopWrapper>
          <Timer isPlaying={isPlaying}></Timer>
          <Settings />
        </TopWrapper>
        <AnswerWrapper>
          <StickmanWrapper >
            <Stickman  counter={wrongLetters}/>
            <Gallows />
          </StickmanWrapper >
          {/* <word /> */}
          <Word word={hangmanWord} lettersGuessed={lettersGuessed}/>
        </AnswerWrapper>
      </GameDisplay>
      <KeyboardWrapper>
        <Keyboard isDisabled={!isPlaying} onKeyClick={handleClick}/>
      </KeyboardWrapper>
    </Wrapper>
  )
};

export default Game;
