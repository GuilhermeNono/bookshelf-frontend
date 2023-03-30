import React from 'react'
import { ContainerBox, ContainerImage, ContainerSec, ContainerText } from './styles'

const ContainerSection = () => {
  return (
    <ContainerSec>
    <ContainerBox>
      <ContainerImage>
        <img src="assets/images/svg/InterfaceAmigavel.svg" />
      </ContainerImage>
      <ContainerText>
        <h4>Interface amigavel</h4>
        <p>Simples de aprender</p>
      </ContainerText>
    </ContainerBox>

    <ContainerBox>
      <ContainerImage>
        <img src="assets/images/svg/Security.svg" />
      </ContainerImage>
      <ContainerText>
        <h4>Seguro</h4>
        <p>Segurança de dados</p>
      </ContainerText>
    </ContainerBox>

    <ContainerBox>
      <ContainerImage>
        <img src="assets/images/svg/Gear.svg" />
      </ContainerImage>
      <ContainerText>
        <h4>Gerenciavel</h4>
        <p>Gerenciamento completo</p>
      </ContainerText>
    </ContainerBox>

    <ContainerBox>
      <ContainerImage>
        <img src="assets/images/svg/Handshake.svg" />
      </ContainerImage>
      <ContainerText>
        <h4>Para todos</h4>
        <p>Disponivel para todos</p>
      </ContainerText>
    </ContainerBox>
  </ContainerSec>
  )
}

export default ContainerSection