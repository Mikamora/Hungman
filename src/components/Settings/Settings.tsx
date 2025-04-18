import { useState } from "react";
import {
  Wrapper,
  OpenSettings,
  SettingsMenu,
  SettingsButton,
  SettingsLogo,
} from "./styles";
import Modal from "../Modals/Modal";
import { useNavigate } from "react-router-dom";
import settingsLogo from "../../assets/settings.png";
import closeLogo from "../../assets/close.png";
import HowToPlay from "../HowToPlay/HowToPlay";

interface SettingsProps {
  modalPortal: string;
}

const Settings = ({ modalPortal }: SettingsProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [howToPlay, setHowToPlay] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const showHowToPlay = () => {
    setHowToPlay(!howToPlay);
  };

  return (
    <Wrapper>
      {howToPlay && (
        <Modal
          title="Hangmench"
          size="m"
          className="howToPlay"
          id="howToPlay"
          bodyContent={<HowToPlay />}
          onClose={() => setHowToPlay(false)}
          portalElement={modalPortal}
        />
      )}
      <OpenSettings onClick={handleClick}>
        <SettingsLogo
          src={open ? closeLogo : settingsLogo}
          alt="settings-menu"
        />
      </OpenSettings>
      {open && (
        <SettingsMenu>
          <SettingsButton onClick={darkModeToggle}>Dark Mode</SettingsButton>
          <SettingsButton onClick={showHowToPlay}>How to Play</SettingsButton>
          <SettingsButton>Themes</SettingsButton>
          <SettingsButton onClick={() => navigate("/")}>
            Back to Menu
          </SettingsButton>
        </SettingsMenu>
      )}
    </Wrapper>
  );
};

export default Settings;
