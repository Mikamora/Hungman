import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    border: 1px solid black;
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

export { Wrapper, GameDisplay, KeyboardWrapper, StickmanWrapper, AnswerWrapper, TopWrapper };