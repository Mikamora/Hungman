import { css, styled } from "styled-components";

// interface MenuProps {
//     $isOpen: boolean;
//     $isClosed: boolean;
// }

const Wrapper = styled.div``;

const OpenSettings = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SettingsLogo = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

const SettingsMenu = styled.div`
  width: 370px;
  height: 400px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 125px;
  right: 0;
`;

const SettingsButton = styled.button`
  font-family: "Inter", serif;
  height: 90px;
  width: 370px;
  background-color: #d9d9d9;
  color: #000000;
  font-weight: 800;
  font-size: 32px;
  border-radius: 15px;
  border: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 40px;
  &:hover {
    cursor: pointer;
    background-color: grey;
    color: #ffffff;
  }
`;

export { Wrapper, OpenSettings, SettingsMenu, SettingsButton, SettingsLogo };
