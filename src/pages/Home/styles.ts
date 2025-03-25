import { styled } from "styled-components";

// interface TitleProps {
//     $disabled: string;
// }
//styled.div<TitleProps>``
//color: ${({ $disabled }) => ($disabled ? "red" : "blue")};

// const mixin = css`
//     font-size: 18px;
//     font-weight: 700;
// `;

// ${mixin};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 30px;
  font-family: "Inter", serif;
`;

const Title = styled.h1`
  display: flex;
  font-size: 70px;
  text-indent: 30px;
  letter-spacing: 30px;
  font-weight: 800;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.75);
`;

const Info = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const BananaCatImg = styled.img``;

const FlavorText = styled.p`
  color: #949494;
  letter-spacing: 2px;
  text-indent: 2px;
  font-size: 18px;
  font-weight: 700;
`;

const StartMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const HomeButtons = styled.button`
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
    transition: background-color 0.1s ease-in-out;
    background-color: #ff746c;
  }
`;

const ModalButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: #d9d9d9;
  color: #000000;
  font-weight: 800;
  font-size: 24px;
  border-radius: 10px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  &:hover {
    cursor: pointer;
    background-color: grey;
    color: #ffffff;
  }
`;

export {
  Wrapper,
  BananaCatImg,
  Title,
  Info,
  FlavorText,
  StartMenu,
  HomeButtons,
  ModalButton,
};
