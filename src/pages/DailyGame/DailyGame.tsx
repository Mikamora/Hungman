import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import * as randomWords from "random-words";
// import Category from "../../components/Category/Category";
import {
  Wrapper,
  GameDisplay,
  KeyboardWrapper,
  StickmanWrapper,
  AnswerWrapper,
  TopWrapper,
} from "../Game/styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";
import { useEffect, useState } from "react";

const DailyGame = () => {
  // @ts-expect-error - wordList is misspelled in the types provided in the package
  const words = randomWords.wordList;
  const [letterClicked, setLetterClicked] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [wrongLetters, setWrongLetters] = useState(0);
  const dailyLettersGuessed = JSON.parse(
    window.localStorage.getItem("lettersGuessed") || '""'
  );

  const getDailyWord = (min: number, max: number) => {
    const now = new Date();
    const seed =
      now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();

    const seededRandom = (seed: number) => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    let random = seededRandom(seed);
    return Math.floor(random * (max - min + 1)) + min;
  };

  const [hangmanWord] = useState<string>(
    words[getDailyWord(0, words.length - 1)]
  );

  useEffect(() => {
    if (wrongLetters >= 7) return setIsPlaying(false);
    const isWordGuessed = hangmanWord
      .split("")
      .every((letter: string) =>
        dailyLettersGuessed.includes(letter.toUpperCase())
      );
    setIsPlaying(!isWordGuessed);
  }, [letterClicked]);

  const handleClick = (letter: string) => {
    setLetterClicked(letter);
    window.localStorage.setItem(
      "lettersGuessed",
      JSON.stringify([...dailyLettersGuessed, letter])
    );
    if (hangmanWord?.toUpperCase().includes(letter)) {
      return IsCorrectTypes.CORRECT;
    }
    setWrongLetters(wrongLetters + 1);
    return IsCorrectTypes.INCORRECT;
  };

  return (
    <Wrapper>
      <GameDisplay>
        <TopWrapper>
          <Timer isPlaying={isPlaying}></Timer>
          <Settings />
        </TopWrapper>
        <AnswerWrapper>
          <StickmanWrapper>
            <Stickman counter={wrongLetters} />
            <Gallows />
          </StickmanWrapper>
          <Word word={hangmanWord} lettersGuessed={dailyLettersGuessed} />
        </AnswerWrapper>
      </GameDisplay>
      <KeyboardWrapper>
        <Keyboard isDisabled={!isPlaying} onKeyClick={handleClick} />
      </KeyboardWrapper>
    </Wrapper>
  );
};

export default DailyGame;
