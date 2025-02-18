import { Head, Body, LeftArm, RightArm, LeftLeg, RightLeg, Rope, Wrapper } from "./styles"

interface StickmanProps {
  counter: number;
}

const Stickman = ({counter}: StickmanProps) => {

  return (
    <Wrapper>
      {counter >= 1 && <Rope />}
      {counter >= 2 && <Head />}
      {counter >= 3 && <Body />}
      {counter >= 4 && <LeftArm />}
      {counter >= 5 && <RightArm />}
      {counter >= 6 && <LeftLeg />}
      {counter >= 7 && <RightLeg />}
    </Wrapper>
  )
};

export default Stickman;
