import { useNavigate } from "react-router-dom";
import logo from "../../assets/cat.webp";
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

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <Wrapper>
      {showSettings && (
        <Modal
          title="Settings"
          size="s"
          className="settings"
          id="settings"
          bodyContent={
            <>
              <ModalButton>Dark Mode</ModalButton>
              <ModalButton>How to Play</ModalButton>
              <ModalButton>Themes</ModalButton>
            </>
          }
          onClose={() => setShowSettings(false)}
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
Add modal state when settings button is pressed ✅ 
Fix settings button on main game ✅ 
Add outsideClick to the modal component
Add the hangman onto game over screen
Add the correct, incorrect, and solution data to game over screen
When you lose or win, open the win/lose modal
Dark mode toggle
How to play information
Any themes
We need to save data to localhost (only for the daily) and reset it every day - the letters that have been clicked, wrongLetter counter, time
Setup the share button
Set up unit tests
Make it consistent time so that people cant change their local time
*/

export default Home;
