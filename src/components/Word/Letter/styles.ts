import { css, styled } from "styled-components";

interface LetterSpanProps {
    $isCorrect: boolean;
}

const LetterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95px;
    width: 75px;
    border-bottom: 3px solid black;
    margin: 150px 5px 5px 5px;
`;

const LetterSpan = styled.span<LetterSpanProps>`
    visibility: hidden;
    font-size: 80px;
    font-family: "Inter", serif;
    font-weight: 900;
    text-transform: uppercase;
    ${({ $isCorrect }) => $isCorrect && css`
        visibility: visible;
    `}

`

export {LetterContainer, LetterSpan};