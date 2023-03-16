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
  Marker,
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
      <h2 className="display-6 text-center mb-4">Compare plans</h2>

<div className="table-responsive">
  <table className="table text-center">
    <thead>
      <tr>
        <th style={{width: "34%"}}>Vantagens</th>
        <th style={{width: "22%"}}>Plano Lite</th>
        <th style={{width: "22%"}}>Plano Essentials</th>
        <th style={{width: "22%"}}>Plano Pro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="text-start">Sistema de emprestimo online</th>
        <td><Marker /></td>
        <td><Marker /></td>
        <td><Marker /></td>
      </tr>
      <tr>
        <th className="text-start">Controle dos usuarios</th>
        <td></td>
        <td><Marker /></td>
        <td><Marker /></td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th className="text-start">Relatorios mensais</th>
        <td><Marker /></td>
        <td><Marker /></td>
        <td><Marker /></td>
      </tr>
      <tr>
        <th className="text-start">Acesso ao acervo digital</th>
        <td></td>
        <td><Marker /></td>
        <td><Marker /></td>
      </tr>
      <tr>
        <th className="text-start">Acesso a 3 telas para a dashboard</th>
        <td></td>
        <td><Marker /></td>
        <td><Marker /></td>
      </tr>
    </tbody>
  </table>
</div>
    </Container>
  );
};

export default Pricing;
