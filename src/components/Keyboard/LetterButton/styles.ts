import { css, styled } from "styled-components";

interface LetterProps {
    $isCorrect: boolean;
    $isWrong: boolean;
}

const Letter = styled.button<LetterProps>`
    font-family: "Inter", serif;
    height: 90px;
    width: 90px;
    background-color: #D9D9D9;
    color: #000000;
    font-weight: 800;
    font-size: 32px;
    border-radius: 15px;
    border: 0;
    &:hover {
        cursor: pointer;
        background-color: grey;
        color: #ffffff;
    }
    ${({ $isCorrect }) => $isCorrect && css`
        background-color: #66C14F;
        color: #ffffff;
        &:hover {
            cursor: default;
            background-color: #66C14F;
            color: #ffffff;
        }
    `}
    ${({ $isWrong }) => $isWrong && css`
        background-color: #555555;
        color: #ffffff;
        &:hover {
            cursor: default;
            background-color: #555555;
            color: #ffffff;
        }
    `}
`;

export { Letter };