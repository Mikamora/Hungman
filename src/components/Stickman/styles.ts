import styled, { css } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 350px;
    width: 300px;
    position: absolute;
    top: 75px;
    left: 140px;
`;

const Head = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #D9D9D9;
    top: 40px;
    left: 100px;
`;

const Body = styled.div`
    position: absolute;
    width: 7px;
    height: 115px;
    background-color: #000000;
    top: 140px;
    left: 146px;
`;

const LeftArm = styled.div`
    position: absolute;
    width: 75px;
    height: 5px;
    background-color: #000000;
    transform: rotate(-45deg);
    top: 170px;
    left: 85px;
`;

const RightArm = styled.div`
    width: 75px;
    height: 5px;
    background-color: #000000;
    transform: rotate(45deg);
    position: absolute;
    top: 170px;
    left: 140px;
`;

const LeftLeg = styled.div`
    position: absolute;
    width: 85px;
    height: 5px;
    background-color: #000000;
    transform: rotate(-60deg);
    top: 286px;
    left: 85px;
`;

const RightLeg = styled.div`
    position: absolute;
    width: 85px;
    height: 5px;
    background-color: #000000;
    transform: rotate(60deg);
    top: 285px;
    left: 128px;
`;

const Rope = styled.div`
    width: 12px;
    height: 40px;
    background-color: #CD8B72;
    position: absolute;
    top: 0;
    left: 144px;
`;

export { Wrapper, Head, Body, LeftArm, RightArm, LeftLeg, RightLeg, Rope };