import styled from "styled-components";

export const Box = styled.section`
    display: grid;
    height: 100vh;
    justify-content: center;
    margin: 0;
`

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 626px;
    height: 448px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 20px;
    align-items: flex-end;
`

export const Titulo = styled.h1`
    font-weight: 500;
    font-size: 57.07px;
    line-height: 86px;
    line-height: 100%;
    color: #FFFFFF;
`

export const OneRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`
export const info = styled.h2`

`

export const Input = styled.input`
    margin-top: 10px;
    padding: 7px;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    `

export const TituloContainer = styled.h2`
    display: grid;
    align-items: center;
    font-size: 33.98px;
    line-height: 51px;
    line-height: 100%;
    opacity: 70%;
    color: #1A2E40;
`

export const Botao = styled.input`
    width: 155px;
    height: 40.71px;
    border-radius: 4px;
    background-color: #1B8EF2;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18.79px;
    line-height: 28.18px;
    line-height: 100%;
`

export const Spacing = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    padding-top: 30px;
`

export const Link = styled.a`
    color: #0075FF;
`