import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import Keyboard from "../../components/Keyboard/Keyboard";
import Settings from "../../components/Settings/Settings";
import { StickmanWrapper } from "./styles";

const Game = () => {
  return (
    <div>
      <StickmanWrapper >
        <Stickman />
        <Gallows />
      </StickmanWrapper >
      <Keyboard />
      <Settings />
    </div>
  )
};

export default Game;
