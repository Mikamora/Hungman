import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import Modal from "../../components/Modals/Modal";
import * as randomWords from "random-words";
// import Category from "../../components/Category/Category";
import {
  Wrapper,
  GameDisplay,
  KeyboardWrapper,
  StickmanWrapper,
  AnswerWrapper,
  TopWrapper,
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
  const [wrongLetters, setWrongLetters] = useState(0);
  const [hangmanWord] = useState<string>(generate(1)[0]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (wrongLetters >= 7) return setIsPlaying(false);
    const isWordGuessed = hangmanWord
      .split("")
      .every((letter: string) => lettersGuessed.includes(letter.toUpperCase()));
    setIsPlaying(!isWordGuessed);
  }, [letterClicked]);

  const handleClick = (letter: string) => {
    setLetterClicked(letter);
    setLettersGuessed([...lettersGuessed, letter]);
    if (hangmanWord?.toUpperCase().includes(letter)) {
      return IsCorrectTypes.CORRECT;
    }
    setWrongLetters(wrongLetters + 1);
    return IsCorrectTypes.INCORRECT;
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Wrapper>
      {modalOpen && (
        <Modal
          title="Game over"
          size="m"
          className="Gameover"
          id="gameover"
          bodyContent={
            <>
              <p>Correct: </p>
              <p>Incorrect: </p>
              <p>Solution: </p>
            </>
          }
          footerContent={<ModalButton>Share your hangman!</ModalButton>}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      <GameDisplay>
        <TopWrapper>
          <Timer isPlaying={isPlaying}></Timer>
          <Settings />
        </TopWrapper>
        <ModalButton onClick={handleModal}>Modal</ModalButton>
        <AnswerWrapper>
          <StickmanWrapper>
            <Stickman counter={wrongLetters} />
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
