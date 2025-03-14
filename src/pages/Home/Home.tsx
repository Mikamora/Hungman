import { useNavigate } from "react-router-dom";
import logo from "../../assets/cat.webp";
import HowToPlay from "../../components/HowToPlay/HowToPlay";
import {
  Wrapper,
  BananaCatImg,
  Title,
  Info,
  FlavorText,
  StartMenu,
  HomeButtons,
  ModalButton,
} from "./styles";
import Modal from "../../components/Modals/Modal";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const date = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [showSettings, setShowSettings] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleHowToPlay = () => {
    setShowHowToPlay(!showHowToPlay);
    setShowSettings(false);
  };

  const closeHowToPlay = () => {
    setShowHowToPlay(false);
    setShowSettings(true);
  };

  return (
    <Wrapper id="home-page">
      {showSettings && (
        <Modal
          title="Settings"
          size="s"
          className="settings"
          id="settings"
          bodyContent={
            <>
              <ModalButton>Dark Mode</ModalButton>
              <ModalButton onClick={toggleHowToPlay}>How to Play</ModalButton>
              <ModalButton>Themes</ModalButton>
            </>
          }
          onClose={() => setShowSettings(false)}
        />
      )}
      {showHowToPlay && (
        <Modal
          title="Hangmench"
          size="m"
          className="howToPlay"
          id="howToPlay"
          bodyContent={<HowToPlay />}
          onClose={closeHowToPlay}
          portalElement="home-page"
        />
      )}
      <BananaCatImg src={logo} alt="big muscle banana cat" />
      <Title>HUNGMAN</Title>
      <Info>
        <FlavorText>
          Figure out the hidden word
          <br />
          Guess one letter at a time
          <br />
          DON'T HANG THE MAN
        </FlavorText>
      </Info>
      <StartMenu>
        <HomeButtons onClick={() => navigate("/game")}>The Daily</HomeButtons>
        <HomeButtons onClick={() => navigate("/unlimited")}>
          Unlimited
        </HomeButtons>
        <HomeButtons onClick={toggleSettings}>Settings</HomeButtons>
      </StartMenu>
      <FlavorText>{date}</FlavorText>
    </Wrapper>
  );
};

/*
- Add modal state when settings button is pressed ✅ 
- Fix settings button on main game ✅ 
- Add outsideClick to the modal component
- game over screen ✅ 
    - Add the hangman onto game over screen ✅ 
    - Add the correct, incorrect, and solution data to game over screen ✅
    - When you lose or win, open the win/lose modal ✅
- Unlimited:
    - Reset game ✅
    - Refresh Keyboard state when reset game clicked
    - How to play information
- Daily:
    - Make letters go away in daily, after a new word is selected
    - We need to save data to localhost (only for the daily) and reset it every day - the letters that have been clicked, wrongLetter counter, time
    - Make it consistent time so that people cant change their local time
    - Make keyboard and hangman remember state
- extra:
    - Set up unit tests
    - Setup the share button -> red emojis for letters incorrect, ascii hangman depending on how many guesses they did
    - Any themes
    - Dark mode toggle
*/

export default Home;
