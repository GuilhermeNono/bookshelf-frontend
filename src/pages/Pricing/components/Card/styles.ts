import styled from "styled-components";

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 1rem;

    @media only screen and (max-width: 1200px){
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`

export const CardLite = styled.div`
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.3rem;
    width: 27rem;
    height: 40.4rem;

    
    @media only screen and (min-width: 768px){
        padding-bottom: 5rem;
    }
    
    @media only screen and (min-width: 992px){
        padding-bottom: 5rem;
    }
    
    @media only screen and (max-width: 1200px){
        margin-bottom: 50px;
    }

    @media only screen and (min-width: 1296px){
        padding-bottom: 0rem;
    }
`

export const CardPro = styled.div`
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.3rem;
    z-index: 1;
    width: 27rem;
    height: 670px;
    transform: scale(1.12);

    @media only screen and (max-width: 1200px) {
        height: 40.4rem;
        transform: scale(1.0);
        z-index: 0;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 600px){
        height: auto;
        padding-bottom: 5rem;
    }

    @media only screen and (min-width: 600px){
        padding-bottom: 5rem;
    }

    @media only screen and (min-width: 768px){
        padding-bottom: 5rem;
    }
    
    @media only screen and (min-width: 992px){
        padding-bottom: 5rem;
    }
    
    @media only screen and (max-width: 1200px){
        margin-bottom: 50px;
    }

    @media only screen and (min-width: 1296px){
        padding-bottom: 0rem;
    }
`


export const CardEssentials = styled.div`
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.3rem;
    width: 27rem;
    height: 40.4rem;

    @media only screen and (max-width: 600px){
        height: auto;
        padding-bottom: 5rem;
    }

    @media only screen and (min-width: 768px){
        padding-bottom: 5rem;
    }

    @media only screen and (min-width: 992px){
        padding-bottom: 5rem;
    }

    @media only screen and (min-width: 1296px){
        padding-bottom: 0rem;
    }
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
    font-size: 1em;

    color: #0D4373;

    @media only screen and (max-width: 600px){
        font-size: 1.1em;
    }
`

export const LiLite = styled.li`
    list-style-image: url("/assets/images/svg/zero.svg");
    list-style-position: inside;

    font-weight: 700;
    font-size: 1.2em;
    color: #1B8EF2;
`

export const LiPro = styled.li`
    list-style-image: url("/assets/images/svg/dois.svg");
    list-style-position: inside;

    font-weight: 700;
    font-size: 1.2em;
    color: #1B8EF2;
`

export const LiEssentials = styled.li`
    list-style-image: url("/assets/images/svg/um.svg");
    list-style-position: inside;
    
    font-weight: 700;
    font-size: 1.2em;
    color: #1B8EF2;
`

export const LiTipo = styled.li`
    font-weight: 400;
    font-size: 20px;
    color: #22A2F2;
    padding-left: 50px;
`

export const LiPrice = styled.li`
    font-weight: 400;
    font-size: 3.5em;
    color: #1A2E40;
    padding: 0.3rem 0;

    @media only screen and (max-width: 600px){
        font-size: 3em;
    }
`

export const LiTitle = styled.li`
    margin-top: 1.4rem;
    font-weight: 700;
    font-size: 1.2em;
    color: #1A2E40;

    @media only screen and (max-width: 600px){
        font-size: 1.15em;
    }
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
    position: absolute;
    bottom: 0;
`

export const TextPopular = styled.span`
    position: absolute;
    right: 0;
    text-align: center;
    background: #1B8EF2;
    border-radius: 10px;
    width: 6.6rem;
    margin: auto 5px;
    color: white;

`