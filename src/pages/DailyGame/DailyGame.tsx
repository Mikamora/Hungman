import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import Word from "../../components/Word/Word";
import Timer from "../../components/Timer/Timer";
import { formatTimeWords } from "../../helpers/Time/FormatTime";
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
  GameTitle,
  PlaySettingsContainer,
  PlayAgainButton,
} from "../Game/styles";
import { IsCorrectTypes } from "../../components/Keyboard/LetterButton/LetterButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DailyGame = () => {
  // @ts-expect-error - wordList is misspelled in the types provided in the package
  const words = randomWords.wordList;
  const navigate = useNavigate();
  const [letterClicked, setLetterClicked] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const [hangmanWord, setHangmanWord] = useState(
    words[getDailyWord(0, words.length - 1)]
  );

  let dailyLettersGuessed = JSON.parse(
    window.localStorage.getItem("lettersGuessed") || '""'
  );
  let dailyWordIndexLS = JSON.parse(
    window.localStorage.getItem("dailyWordIndex") || '""'
  );
  let dailyTimer = JSON.parse(window.localStorage.getItem("dailyTimer") || "0");

  console.log(dailyLettersGuessed);

  // Reset all states and local storage
  useEffect(() => {
    const dailyWordIndex = getDailyWord(0, words.length - 1);
    setHangmanWord(words[dailyWordIndex]);

    if (dailyWordIndex !== dailyWordIndexLS) {
      // Reset daily letters guessed
      dailyLettersGuessed = [];
      window.localStorage.setItem("lettersGuessed", JSON.stringify([]));

      // Reset the dailyWordIndex => resets the daily word to a new word
      window.localStorage.setItem(
        "dailyWordIndex",
        JSON.stringify(dailyWordIndex)
      );

      // Reset the timer
      dailyTimer = 0;
      window.localStorage.setItem("dailyTimer", JSON.stringify(0));

      // Reset all state variables
      setWrongLetters([]);
      setCorrectLetters([]);
      setGameOver(false);
      setIsPlaying(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, []);

  // Checks if the clicked letter is in the daily word
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
    if (isWordGuessed) {
      setGameOver(true);
      setIsPlaying(false);
    }
  }, [letterClicked, hangmanWord]);

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

  // Maybe convert these sorting functions into one function using switch cases
  const wrongLetterSorting = () => {
    let wl: string[] = [];
    console.log(dailyLettersGuessed);
    if (dailyLettersGuessed) {
      dailyLettersGuessed.forEach((letter: string) => {
        if (!hangmanWord.toLowerCase().includes(letter.toLowerCase())) {
          wl.push(letter.toLowerCase());
        }
      });
      console.log("wl" + wl);
    }
    return wl;
  };

  const correctLetterSorting = () => {
    let cl: string[] = [];
    if (dailyLettersGuessed) {
      dailyLettersGuessed.forEach((letter: string) => {
        if (hangmanWord.toLowerCase().includes(letter.toLowerCase())) {
          cl.push(letter.toLowerCase());
        }
      });
    }
    return cl;
  };

  const [wrongLetters, setWrongLetters] = useState<string[]>(
    wrongLetterSorting()
  );
  const [correctLetters, setCorrectLetters] = useState<string[]>(
    correctLetterSorting()
  );

  const handleModal = () => {
    setModalOpen(!modalOpen);
    setGameOver(false);
    setIsPlaying(false);
  };

  const openModal = () => {
    setGameOver(true);
    setModalOpen(!modalOpen);
  };

  const copyResults = () => {
    let dailyTimer = JSON.parse(
      window.localStorage.getItem("dailyTimer") || "0"
    );
    if (wrongLetters.length >= 7) {
      navigator.clipboard.writeText(
        `${asciiHangman[wrongLetters.length]} \nI lost the Hungman with ${
          dailyLettersGuessed.length
        } guesses in ${formatTimeWords(dailyTimer)}`
      );
    } else {
      navigator.clipboard.writeText(
        `${asciiHangman[wrongLetters.length]} \nI won the Hungman with ${
          dailyLettersGuessed.length
        } guesses in ${formatTimeWords(dailyTimer)}`
      );
    }
    setShowCopy(true);

    setTimeout(() => {
      setShowCopy(false);
    }, 1000);
  };

  const toUpper = (letter: string) => {
    return letter.toUpperCase();
  };

  // Make a better loading state! Maybe css animation???
  return isLoading ? (
    <>Loading...</>
  ) : (
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
              <p>Correct: {correctLetters.map(toUpper)}</p>
              <p>Incorrect: {wrongLetters.map(toUpper)}</p>
              <p>Solution: {hangmanWord.toUpperCase()}</p>
            </>
          }
          footerContent={
            <>
              <ModalButton onClick={copyResults}>
                {showCopy ? "Results copied!" : "Share your hangman!"}
              </ModalButton>
              <ModalButton onClick={() => navigate("/unlimited")}>
                Play unlimited mode
              </ModalButton>
            </>
          }
          onClose={handleModal}
        />
      )}
      <GameDisplay>
        <TopWrapper>
          <Timer isPlaying={isPlaying} isDaily={true}></Timer>
          <GameTitle>DAILY</GameTitle>
          <PlaySettingsContainer $playAgainIsVisible={!isPlaying}>
            {!isPlaying && (
              <>
                <PlayAgainButton onClick={openModal}>
                  View Results
                </PlayAgainButton>
                <PlayAgainButton onClick={() => navigate("/unlimited")}>
                  Play Unlimited
                </PlayAgainButton>
              </>
            )}
            <Settings modalPortal="daily-game" />
          </PlaySettingsContainer>
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
        <Keyboard
          isDisabled={!isPlaying}
          onKeyClick={handleClick}
          dailyWord={hangmanWord}
        />
      </KeyboardWrapper>
    </Wrapper>
  );
};

export default DailyGame;
