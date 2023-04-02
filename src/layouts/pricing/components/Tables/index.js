import {
  TableResponsive,
  Thv,
  ThTop,
  ThLeft,
  Td,
  Marker,
  Table,
} from "assets/styledComponents/pricingStyles";

function Tables() {
  return (
    <TableResponsive>
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
            <ThLeft>Sistema de emprestimo online</ThLeft>
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
            <Td />
            <Td>
              <Marker />
            </Td>
            <Td>
              <Marker />
            </Td>
          </tr>
          <tr>
            <ThLeft>Acesso a 3 telas para a dashboard</ThLeft>
            <Td />
            <Td />
            <Td>
              <Marker />
            </Td>
          </tr>
        </tbody>
      </Table>
    </TableResponsive>
  );
}

export default Tables;
