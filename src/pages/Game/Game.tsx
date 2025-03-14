import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import Modal from "../../components/Modals/Modal";
import asciiHangman from "../../helpers/ShareYourHangmanText/ShareYourHangmanText";
import * as randomWords from "random-words";
import {
  Wrapper,
  GameDisplay,
  KeyboardWrapper,
  StickmanWrapper,
  AnswerWrapper,
  TopWrapper,
  StickmanDiv,
  PlayAgainButton,
  PlaySettingsContainer,
} from "./styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";
import { useEffect, useState } from "react";
import { ModalButton } from "../Home/styles";

const Game = () => {
  // @ts-expect-error - wordList is misspelled in the types provided in the package
  const words = randomWords.wordList;
  const generate = randomWords.generate;
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [letterClicked, setLetterClicked] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [hangmanWord, setHangmanWord] = useState<string>(generate(1)[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  useEffect(() => {
    const isWordGuessed = hangmanWord
      .split("")
      .every((letter: string) => lettersGuessed.includes(letter.toUpperCase()));
    if (wrongLetters.length >= 7) {
      setIsPlaying(false);
      setGameOver(true);
    }
    if (isWordGuessed) {
      setGameOver(true);
      setIsPlaying(false);
    }
  }, [letterClicked]);

  const handleClick = (letter: string) => {
    setLetterClicked(letter);
    setLettersGuessed([...lettersGuessed, letter]);
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

  const handlePlayAgain = () => {
    //TODO: refactor this to use useReducer
    setGameOver(false);
    setIsPlaying(true);
    setLettersGuessed([]);
    setCorrectLetters([]);
    setWrongLetters([]);
    setHangmanWord(generate(1)[0]);
    setLetterClicked("");
  };

  const copyResults = () => {
    if (wrongLetters.length >= 7) {
      navigator.clipboard.writeText(
        asciiHangman[wrongLetters.length - 1] +
          "\nI lost the Hungman in " +
          lettersGuessed.length +
          " guesses"
      );
    } else {
      navigator.clipboard.writeText(
        asciiHangman[wrongLetters.length - 1] +
          "\nI won the Hungman in " +
          lettersGuessed.length +
          " guesses"
      );
    }
  };

  return (
    <Wrapper id="unlimited-game">
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
          <PlaySettingsContainer $playAgainIsVisible={!isPlaying}>
            {!isPlaying && (
              <PlayAgainButton onClick={handlePlayAgain}>
                Play Again?
              </PlayAgainButton>
            )}
            <Settings modalPortal="unlimited-game" />
          </PlaySettingsContainer>
        </TopWrapper>
        {/* <ModalButton onClick={handleModal}>Modal</ModalButton> */}
        <AnswerWrapper>
          <StickmanWrapper>
            <Stickman counter={wrongLetters.length} />
            <Gallows />
          </StickmanWrapper>
          <Word word={hangmanWord} lettersGuessed={lettersGuessed} />
        </AnswerWrapper>
      </GameDisplay>
      <KeyboardWrapper>
        <Keyboard isDisabled={!isPlaying} onKeyClick={handleClick} />
      </KeyboardWrapper>
    </Wrapper>
  );
};

export default Game;
