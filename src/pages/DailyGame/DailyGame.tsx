import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import * as randomWords from "random-words";
import Modal from "../../components/Modals/Modal";
import { ModalButton } from "../Home/styles";
import asciiHangman from "../../helpers/ShareYourHangmanText/ShareYourHangmanText";
import {
  Wrapper,
  GameDisplay,
  KeyboardWrapper,
  StickmanWrapper,
  AnswerWrapper,
  TopWrapper,
  StickmanDiv,
} from "../Game/styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";
import { useEffect, useState } from "react";

const DailyGame = () => {
  // @ts-expect-error - wordList is misspelled in the types provided in the package
  const words = randomWords.wordList;
  const [letterClicked, setLetterClicked] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
    const isWordGuessed = hangmanWord
      .split("")
      .every((letter: string) =>
        dailyLettersGuessed.includes(letter.toUpperCase())
      );
    if (wrongLetters.length >= 7) {
      setIsPlaying(false);
      setGameOver(true);
    }
    setIsPlaying(!isWordGuessed);
    console.log(isWordGuessed);
  }, [letterClicked]);

  const handleClick = (letter: string) => {
    setLetterClicked(letter);
    window.localStorage.setItem(
      "lettersGuessed",
      JSON.stringify([...dailyLettersGuessed, letter])
    );
    if (hangmanWord?.toUpperCase().includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
      return IsCorrectTypes.CORRECT;
    }
    setWrongLetters([...wrongLetters, letter]);
    return IsCorrectTypes.INCORRECT;
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
    setGameOver(false);
    setIsPlaying(false);
  };

  const copyResults = () => {
    if (wrongLetters.length >= 7) {
      navigator.clipboard.writeText(
        asciiHangman[wrongLetters.length - 1] +
          "\nI lost the Hungman in " +
          dailyLettersGuessed.length +
          " guesses"
      );
    } else {
      navigator.clipboard.writeText(
        asciiHangman[wrongLetters.length - 1] +
          "\nI won the Hungman in " +
          dailyLettersGuessed.length +
          " guesses"
      );
    }
  };

  return (
    <Wrapper id="daily-game">
      {gameOver && (
        <Modal
          title={wrongLetters.length >= 7 ? "GAME OVER" : "YOU WON"}
          size="m"
          className={wrongLetters.length >= 7 ? "gameover" : "win"}
          id="gameover"
          bodyContent={
            <>
              <StickmanDiv>
                <Stickman counter={wrongLetters.length} />
              </StickmanDiv>
              <p>Correct: {correctLetters}</p>
              <p>Incorrect: {wrongLetters}</p>
              <p>Solution: {hangmanWord.toUpperCase()}</p>
            </>
          }
          footerContent={
            <ModalButton onClick={copyResults}>Share your hangman!</ModalButton>
          }
          onClose={handleModal}
        />
      )}
      <GameDisplay>
        <TopWrapper>
          <Timer isPlaying={isPlaying}></Timer>
          <Settings modalPortal="daily-game" />
        </TopWrapper>
        <AnswerWrapper>
          <StickmanWrapper>
            <Stickman counter={wrongLetters.length} />
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
