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
    --bg-color: #ffffff;
    --text-color: #22100d;
    --second-color: #685f78;
    --main-color: #f66962;
    --big-font: 3.8rem;
    --h2-font: 2.6rem;
    --p-font: 1.1rem;
}
    
    body{
        background: #ffffff;
        color: #1A2E40;
    }

    section{
	    padding: 80px 13%;
    }
`;
