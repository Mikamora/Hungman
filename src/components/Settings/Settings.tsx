import { useState } from "react";
import {
  Wrapper,
  OpenSettings,
  SettingsMenu,
  SettingsButton,
  SettingsLogo,
} from "./styles";
import { useNavigate } from "react-router-dom";
import settingsLogo from "../../assets/settings.png";
import closeLogo from "../../assets/close.png";

const Settings = ({}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Wrapper>
      <OpenSettings onClick={handleClick}>
        <SettingsLogo
          src={open ? closeLogo : settingsLogo}
          alt="settings-menu"
        />
      </OpenSettings>
      {open && (
        <SettingsMenu>
          <SettingsButton onClick={darkModeToggle}>Dark Mode</SettingsButton>
          <SettingsButton>How to Play</SettingsButton>
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
