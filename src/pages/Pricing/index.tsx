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
  LiLite,
  LiPro,
  LiEssentials,
  LiTipo,
  ButtonOne,
  ButtonTwo,
  Marker,
  Td,
  Table,
  ThLeft,
  ThTop,
  Thv,
  Row,
  TextPopular,
} from "./styles";
import "./style.css";

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
            <Row>
              <LiPro>Plano Pro</LiPro>
                <TextPopular>Popular</TextPopular>
            </Row>
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
          <List>
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

      <div className="tableResponsive">
        <Table>
          <thead>
            <tr>
              <Thv style={{ width: "34%" }}>Vantagens</Thv>
              <ThTop style={{ width: "22%" }}>Plano Lite</ThTop>
              <ThTop style={{ width: "22%" }}>Plano Essentials</ThTop>
              <ThTop style={{ width: "22%" }}>Plano Pro</ThTop>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ThLeft>
                Sistema de emprestimo online
              </ThLeft>
              <Td>
                <Marker />
              </Td>
              <Td>
                <Marker />
              </Td>
              <Td>
                <Marker />
              </Td>
            </tr>
            <tr>
              <ThLeft>Controle dos usuarios</ThLeft>
              <Td>
                <Marker />
              </Td>
              <Td>
                <Marker />
              </Td>
              <Td>
                <Marker />
              </Td>
            </tr>
            <tr>
              <ThLeft>Relatorios mensais</ThLeft>
              <Td>
                <Marker />
              </Td>
              <Td>
                <Marker />
              </Td>
              <Td>
                <Marker />
              </Td>
            </tr>
            <tr>
              <ThLeft>Acesso ao acervo digital</ThLeft>
              <Td></Td>
              <Td>
                <Marker />
              </Td>
              <Td>
                <Marker />
              </Td>
            </tr>
            <tr>
              <ThLeft>
                Acesso a 3 telas para a dashboard
              </ThLeft>
              <Td></Td>
              <Td></Td>
              <Td>
                <Marker />
              </Td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Pricing;
