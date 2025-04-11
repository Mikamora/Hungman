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
- Add modal state when settings button is pressed ✅ before 3/19
- Fix settings button on main game ✅ before 3/19
- game over screen ✅ before 3/19
    - Add the hangman onto game over screen ✅ before 3/19
    - Add the correct, incorrect, and solution data to game over screen ✅ before 3/19
    - When you lose or win, open the win/lose modal ✅ before 3/19
- Unlimited: ✅ 
    - Reset game ✅ <-- before 3/19
    - Refresh Keyboard state when reset game clicked ✅ <-- before 3/19
    - Play again button on the modal ✅ <- before 3/19
    - How to play information ✅ before 3/19
- Daily:
    - Make letters go away in daily, after a new word is selected ✅ 3/31
    - We need to save data to localhost (only for the daily) and reset it every day ✅ 3/31
      - Correct/Incorrect letter assignments on page reload ✅ 3/24
      - Wrong letter counter -> update hangman ✅ 3/24
      - Save time passed -> toString() on save and parseInt() on load ✅ 4/10
    - Make hangman remember state ✅ 3/24
    - Put title on the top of daily "Daily" and the top of unlimited "Unlimited" ✅ 3/24
    - Add "play unlimited" button to game over screen ✅ 3/19
- Add outsideClick to the modal component ✅ 3/24
- Add loading state for brief flicker ✅ 4/10
    - Add more styling to the loading state cover
- Deploy this on github pages
- extra:
    - Set up unit tests - components - integration tests - routing tests
    - Setup the share button -> red emojis for letters incorrect, ascii hangman depending on how many guesses they did ✅ before 3/19
    - Any themes
    - Dark mode toggle - styled components themes
    - Transition to grid at smaller screen sizes - media queries
    - Add win streak/ longest streak
    - Make it consistent time so that people cant change their local time (DONT DO THIS TIME BUT MAYBE IN THE FUTURE)
*/

export default Home;
