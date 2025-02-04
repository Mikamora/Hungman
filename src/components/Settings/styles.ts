import { styled } from "styled-components";

const Wrapper = styled.button`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 25px;
    background: url(src/assets/settings.png) no-repeat center;
    background-size: 50px 50px;
    background-color: #D9D9D9;
    &:hover {
        cursor: pointer;
    }
`;

export { Wrapper };