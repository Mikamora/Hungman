import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const GameDisplay = styled.div`
  display: flex;
  flex: 1;
  padding: 25px;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  font-family: "Inter", serif;
`;

const KeyboardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const StickmanWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 480px;
  margin-right: 150px;
`;

const AnswerWrapper = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const TopWrapper = styled.div`
  width: 100%;
  // height: 140px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StickmanDiv = styled.div`
  position: absolute;
  top: -75px;
  right: 365px;
`;

const PlayAgainButton = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Inter", serif;
  height: 60px;
  width: 200px;
  background-color: #d9d9d9;
  color: #000000;
  font-weight: 800;
  font-size: 22px;
  border-radius: 15px;
  border: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 40px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    background-color: grey;
    color: #ffffff;
  }
`;

interface PlaySettingsContainerProps {
  $playAgainIsVisible: boolean;
}

const PlaySettingsContainer = styled.div<PlaySettingsContainerProps>`
  display: flex;
  justify-content: end;
  align-items: center;
  width: ${({ $playAgainIsVisible }) =>
    $playAgainIsVisible ? "500px" : "110px"};
  transition: width 1s ease-in-out;
`;

export {
  Wrapper,
  GameDisplay,
  KeyboardWrapper,
  StickmanWrapper,
  AnswerWrapper,
  TopWrapper,
  StickmanDiv,
  PlayAgainButton,
  PlaySettingsContainer,
};
