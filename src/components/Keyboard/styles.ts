import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 300px;
    width: 1024px;
    border: 1px solid black;
`;

const TopRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1024px;
    height: 90px;
    margin-bottom: 10px;
`;

const MiddleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 920px;
    height: 90px;
    margin-bottom: 10px;
`;

const BottomRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 710px;
    height: 90px;
`;

const LetterButton = styled.button`
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
`;

export { Wrapper, TopRow, MiddleRow, BottomRow, LetterButton };