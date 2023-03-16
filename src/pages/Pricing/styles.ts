import styled from "styled-components";

export const Container = styled.div`
    background-image: url("/assets/images/svg/Pricing.svg");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`

export const H1Chamativo = styled.h1`
    font-weight: 600;
    font-size: 4em;

    display: flex;
    justify-content: center;

    color: #FFFFFF;
`

export const H4Chamativo = styled.h4`
    font-weight: 400;
    font-size: 1.6em;
    display: flex;
    justify-content: center;
    color: #F1F1F1;
`

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5rem;
`

export const CardLite = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.3rem;
    width: 27rem;
`

export const CardPro = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.3rem;
    z-index: 1;
    width: 27rem;
`

export const CardEssentials = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.3rem;
    width: 27rem;
`

export const List = styled.ul`
    margin: 1rem 2rem 0rem 2rem;
    display: flex;
    flex-direction: column;
    list-style-type: none;
`

export const Linha = styled.li`
    padding: 0.6rem 0;
    list-style-image: url("/assets/images/svg/Checking.svg");
    list-style-position: inside;

    font-weight: 400;
    font-size: 1.3em;

    color: #0D4373;
`

export const LiPrice = styled.li`
    font-weight: 400;
    font-size: 3.7em;
    color: #1A2E40;
`

export const LiTitle = styled.li`
    margin-top: 1.4rem;
    font-weight: 700;
    font-size: 1.3em;
    color: #1A2E40;
`

export const ButtonOne = styled.input`
    height: 2.75rem;
    border-radius: 4px;
    background-color: #1B8EF2;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 1.25em;
`

export const ButtonTwo = styled.input`
    width: 100%;
    height: 3.5rem;
    border-radius: 0px 0px 0.3rem 0.3rem;
    background-color: #1B8EF2;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    font-weight: 600;
    font-size: 1.25em;
`

export const Marker = styled.svg`
    background-image: url("/assets/images/svg/Checking.svg");
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
`