import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    height: 480px;
    width: 325px;
`;

const Bottom = styled.div`
    background-color: grey;
    height: 40px;
    width: 325px;
    position: absolute;
    bottom: 0px;
`;

const Post = styled.div`
    background-color: grey;
    height: 440px;
    width: 42px;
    position: absolute;
    bottom: 40px;
    left: 141px;
`;

const Top = styled.div`
    background-color: grey;
    height: 42px;
    width: 160px;
    position: absolute;
    bottom: 400px;
    left: 160px;
`;

export { Wrapper, Bottom, Post, Top };