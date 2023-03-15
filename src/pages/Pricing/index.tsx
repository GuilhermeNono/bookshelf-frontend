import {
  Container,
  H1Chamativo,
  H4Chamativo,
  Cards,
  CardLite,
  CardPro,
  CardEssentials,
  List,
  Linha,
  LiPrice,
  LiTitle,
  ButtonOne,
  ButtonTwo,
} from "./styles";

const Pricing = () => {
  return (
    <Container>
      <H1Chamativo>Contrate o melhor plano para você</H1Chamativo>
      <H4Chamativo>
        Temos planos para todos os portes, contrate oque melhor combina com sua
        biblioteca.
      </H4Chamativo>
      <Cards>
        <CardLite>
          <List>
            <Linha>Plano Lite</Linha>
            <Linha>Plano Simples</Linha>
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
            <Linha>Plano Pro</Linha>
            <Linha>Plano completo</Linha>
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
          <List>
            <Linha>Plano Essentials</Linha>
            <Linha>Plano padrão</Linha>
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
    </Container>
  );
};

export default Pricing;
