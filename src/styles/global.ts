import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'poppins';
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
    }

    :root{
    --bg-color: #335675;
    --bg-second-color: #61A9EB;
    --text-color: #FFFFFF;
    --text-subtitle: #CECECE;
    --second-color: #1A2E40;
    --main-color: #1B8EF2;
    --big-font: 3.8rem;
    --h2-font: 2.6rem;
    --p-font: 1.1rem;
}
    
    body{
        background: var(--bg-color);
        color: var(--text-color);
    }

    section{
	    padding: 80px 13%;
    }
`;
