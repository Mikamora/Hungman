import styled from "styled-components";

const GameDisplay = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    width: 100%;
    align-items: center;
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
`

const TopWrapper = styled.div`
    width: 100%;
    height: 140px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export { GameDisplay, StickmanWrapper, AnswerWrapper, TopWrapper };