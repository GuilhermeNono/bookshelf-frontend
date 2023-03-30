import styled from "styled-components";

export const Marker = styled.svg`
    background-image: url("/assets/images/svg/CheckingPlans.svg");
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    margin: 0.5rem;
`


export const ThTop = styled.th`
    text-align: center;
    border-bottom: 0.1rem solid #E1E1E1;
    font-weight: 500;
    font-size: 1.5em;
    color: #FFFFFF;

    @media only screen and (max-width: 600px){
        font-size: 1.2em;
    }

    @media only screen and (min-width: 600px){
        font-size: 1.2em;
    }

    @media only screen and (min-width: 768px){
        font-size: 1.35em;
    }

    @media only screen and (min-width: 992px){
        font-size: 1.5em;
    }

    @media only screen and (min-width: 1296px){
        font-size: 1.6em;
    }
`

export const Thv = styled.th`
    text-align: start;
    border-bottom: 0.1rem solid #E1E1E1;
    font-weight: 500;
    font-size: 1.5em;
    color: #FFFFFF;

    @media only screen and (max-width: 600px){
        font-size: 1em;
    }

    @media only screen and (min-width: 600px){
        font-size: 1.2em;
    }

    @media only screen and (min-width: 768px){
        font-size: 1.35em;
    }

    @media only screen and (min-width: 992px){
        font-size: 1.5em;
    }

    @media only screen and (min-width: 1296px){
        font-size: 1.6em;
    }
`

export const ThLeft = styled.th`
    text-align: start;
    border-bottom: 0.1rem solid #E1E1E1;
    font-weight: 400;
    font-size: 1em;
    color: #0D4373;
`

export const Td = styled.td`
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    border-bottom: 0.1rem solid #E1E1E1;
`

export const Table = styled.table`
    border-collapse: collapse;
    margin: 3rem auto;
`

export const TableResponsive = styled.div`
    overflow-x: auto;
`