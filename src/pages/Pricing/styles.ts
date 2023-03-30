import styled from "styled-components";

export const Container = styled.div`
    background-image: linear-gradient(180deg, #335675 47rem, #61A9EB 40%);
    height: 100%;
    min-height: 100vh;

    @media only screen and (max-width: 600px){
        background-image: linear-gradient(180deg, #335675 47rem, #61A9EB 10%);
    }

    @media only screen and (min-width: 600px){
        background-image: linear-gradient(180deg, #335675 47rem, #61A9EB 20%);
    }
`