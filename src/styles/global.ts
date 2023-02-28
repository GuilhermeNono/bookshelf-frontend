import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        *{
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: #61A9EB;
    }

    .HeaderBack{
            background-color: #FFFF;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(19deg, var(--color-1), var(--color-2));
        transform-origin: 0px 0px;
        transform: skewY(-10deg);
        overflow: hidden;
        z-index: -1;}
`;

