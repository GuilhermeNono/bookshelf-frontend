import React from "react";
import {
  ContainerBox,
  ContainerImage,
  ContainerSec,
  ContainerText,
} from "assets/styledComponents/homeStyles";

import friendlyInterface from "assets/images/InterfaceAmigavel.svg";
import security from "assets/images/Security.svg";
import gear from "assets/images/Gear.svg";
import handShake from "assets/images/Handshake.svg";

function ContainerSection() {
  return (
    <ContainerSec>
      <ContainerBox>
        <ContainerImage>
          <img src={friendlyInterface} alt="service" />
        </ContainerImage>
        <ContainerText>
          <h4>Interface amigavel</h4>
          <p>Simples de aprender</p>
        </ContainerText>
      </ContainerBox>

      <ContainerBox>
        <ContainerImage>
          <img src={security} alt="service" />
        </ContainerImage>
        <ContainerText>
          <h4>Seguro</h4>
          <p>Segurança de dados</p>
        </ContainerText>
      </ContainerBox>

      <ContainerBox>
        <ContainerImage>
          <img src={gear} alt="service" />
        </ContainerImage>
        <ContainerText>
          <h4>Gerenciavel</h4>
          <p>Gerenciamento completo</p>
        </ContainerText>
      </ContainerBox>

      <ContainerBox>
        <ContainerImage>
          <img src={handShake} alt="service" />
        </ContainerImage>
        <ContainerText>
          <h4>Para todos</h4>
          <p>Disponivel para todos</p>
        </ContainerText>
      </ContainerBox>
    </ContainerSec>
  );
}

export default ContainerSection;
