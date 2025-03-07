import { css, styled } from "styled-components";

interface WrapperProps {
  $size: "s" | "m";
}

interface FooterProps {
  $isPresent: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: "Inter", serif;
  padding: 25px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 10px rgba(168, 168, 168, 0.64);
  ${({ $size }) =>
    $size === "s" &&
    css`
      width: 350px;
      height: 425px;
      align-items: center;
    `}
  ${({ $size }) =>
    $size === "m" &&
    css`
      width: 500px;
      height: 500px;
    `}
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 800;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 30px;
`;

const Body = styled.div`
  width: 90%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px;
  font-size: 25px;
  font-weight: 700;
`;

const Footer = styled.div<FooterProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  ${({ $isPresent }) =>
    !$isPresent &&
    css`
      justify-content: right;
    `}
`;

// Display so that multiple buttons can be passed in and are centered with the left aligned info

const CloseButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: #949494;
  color: #fff;
  border: 0;
  border-radius: 10px;
  margin: 10px 0;
  letter-spacing: 2px;
  text-indent: 2px;
  font-weight: 800;
  &:hover {
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    background-color: #ff746c;
  }
`;

const ButtonContainer = styled.div``;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(122, 122, 122, 0.46);
  /* opacity: 0.4; */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 500;
`;

export {
  Wrapper,
  Title,
  Subtitle,
  Body,
  Footer,
  CloseButton,
  ButtonContainer,
  Backdrop,
};
