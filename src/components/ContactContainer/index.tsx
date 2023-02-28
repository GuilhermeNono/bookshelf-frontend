import React from 'react'
import { ContainerInfo, H2, H3, InputContainer, MainContainer, P, TextContainer, Input, Button } from './styles'

function index() {
  return (
    <MainContainer>
      <TextContainer>
        <H2>Contato</H2>
        <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem
        non magna posuere accumsan in non felis. Nullam urna metus, aliquet
        fringilla aliquet luctus, imperdiet vitae dolor"
        </P> 

        <H3>Phone</H3>
        <P>+55 14 99999-9999</P>

        <H3>E-mail</H3>
        <P>E-mail Bookshelf@suPPort.com</P>

        <H3>Location</H3>
        <P>Blablabla 402, Jorge mauricio, Barra bonita, BR</P>
      </TextContainer>
        
        <ContainerInfo>
        <InputContainer>
            <Input type="text" placeholder="Seu Nome" />
            <Input type="email" placeholder="Endereço de e-mail" />
            <Input type="text" placeholder="Titulo" />
            <Input type="text" placeholder="Mensagem" /> 

            <Button>Enviar</Button>
        </InputContainer>

        </ContainerInfo>


    

    </MainContainer> 
  )
}

export default index

