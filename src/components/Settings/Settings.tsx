import { useState } from "react";
import { Wrapper, OpenSettings, SettingsMenu, SettingsButton } from "./styles";
import { useNavigate } from "react-router-dom";

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
      <OpenSettings
        $isOpen={open} 
        $isClosed={!open} 
        onClick={handleClick}
      />
      {open && <SettingsMenu>
        <SettingsButton onClick={darkModeToggle}>Dark Mode</SettingsButton>
        <SettingsButton>How to Play</SettingsButton>
        <SettingsButton>Themes</SettingsButton>
        <SettingsButton onClick={() => navigate("/")}>Back to Menu</SettingsButton>
      </SettingsMenu>}
    </Wrapper>
  )
};

export default Settings;
