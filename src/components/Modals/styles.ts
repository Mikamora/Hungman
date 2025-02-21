import { css, styled } from "styled-components";

interface WrapperProps {
  $size: "s" | "m";
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px 10px 20px 20px;
  border: 1px solid black;
  border-radius: 15px;
  ${({ $size }) => $size === "s" && css`
    width: 350px;
    height: 400px;
  `}
  ${({ $size }) => $size === "m" && css`
    width: 450px;
    height: 500px;
  `}
`;

const Title = styled.p`
  font-size: 40px;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 30px;
`;

const Body = styled.div`
  width: 60%;
  height: 450px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 1px solid black;
`;

// Display so that multiple buttons can be passed in and are centered with the left aligned info

const BackButton = styled.button`
  width: 160px;
  height: 45px;
  background-color: #949494;
  color: #fff;
  border: 0;
  border-radius: 15px;
  margin: 10px 0;
  letter-spacing: 2px;
  text-indent: 2px;
  &:hover {
    cursor: pointer;
    transition: background-color .1s ease-in-out;
    background-color: #FF746C;
  };`;

const ButtonContainer = styled.div`
  border: 1px solid black;
`;

export { Wrapper, Title, Subtitle, Body, Footer, BackButton, ButtonContainer };