import {
  CardEssentials,
  CardLite,
  CardPro,
  Cards,
  LiEssentials,
  LiLite,
  Linha,
  LiPrice,
  LiPro,
  List,
  LiTipo,
  LiTitle,
  ButtonOne,
  ButtonTwo,
  TextPopular,
  TopRow,
} from "assets/styledComponents/pricingStyles";

function Card() {
  return (
    <Cards>
      <CardLite>
        <List>
          <LiLite>Plano Lite</LiLite>
          <LiTipo>Plano Simples</LiTipo>
          <LiPrice>R$ 79</LiPrice>
          <ButtonOne type="button" value="Contratar pacote" />
          <LiTitle>Vantagens do Plano Lite:</LiTitle>
          <Linha>Sistema de emprestimo online com envio de notificação</Linha>
          <Linha>Relatorios mensais</Linha>
          <Linha>Controle dos usuarios da biblioteca</Linha>
        </List>
        <ButtonTwo type="button" value="Ler mais" />
      </CardLite>
      <CardPro>
        <List>
          <TopRow>
            <LiPro>Plano Pro</LiPro>
            <TextPopular>Popular</TextPopular>
          </TopRow>
          <LiTipo>Plano completo</LiTipo>
          <LiPrice>R$ 159</LiPrice>
          <ButtonOne type="button" value="Contratar pacote" />
          <LiTitle>Vantagens do Plano Pro:</LiTitle>
          <Linha>Acesso ao acervo digital</Linha>
          <Linha>Acesso a 3 telas para a dashboard</Linha>
          <Linha>Controle dos usuarios da biblioteca</Linha>
          <Linha>Sistema de emprestimo online com envio de notificação</Linha>
          <Linha>Relatorios mensais</Linha>
        </List>
        <ButtonTwo type="button" value="Ler mais" />
      </CardPro>
      <CardEssentials>
        <List style={{ paddingLeft: "2rem" }}>
          <LiEssentials>Plano Essentials</LiEssentials>
          <LiTipo>Plano padrão</LiTipo>
          <LiPrice>R$ 109</LiPrice>
          <ButtonOne type="button" value="Contratar pacote" />
          <LiTitle>Vantagens do Plano Essentials:</LiTitle>
          <Linha>Acesso ao acervo digital</Linha>
          <Linha>Controle dos usuarios da biblioteca</Linha>
          <Linha>Sistema de emprestimo online com envio de notificação</Linha>
          <Linha>Relatorios mensais</Linha>
        </List>
        <ButtonTwo type="button" value="Ler mais" />
      </CardEssentials>
    </Cards>
  );
}

export default Card;
