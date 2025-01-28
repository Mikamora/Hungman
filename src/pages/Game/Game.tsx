import Gallows from "../../components/Gallows/Gallows";
import Stickman from "../../components/Stickman/Stickman";
import { StickmanWrapper } from "./styles";
// import Keyboard from "../../components/Keyboard/Keyboard";

const Game = () => {
  return (
    <div>
      <StickmanWrapper >
        <Stickman />
        <Gallows />
      </StickmanWrapper >
      {/*<Keyboard />*/}
    </div>
  )
};

export default Game;
