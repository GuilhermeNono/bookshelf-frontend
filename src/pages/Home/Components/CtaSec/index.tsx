import { Btn, CenterText } from "../../styles";
import { CtaContent, CtaImage, CtaSec, CtaText } from "./styles";

const CtaSection = () => {
  return (
    <CtaSec>
      <CenterText>
        <h5>Dashboard</h5>
        <h2>Painel para todos os usuario</h2>
      </CenterText>

      <CtaContent>
        <CtaImage>
          <img src="assets/images/svg/dash.svg" />
          </CtaImage>
          <CtaText>
            <h2>Painel de controle para todo o tipo de usuario</h2>
            <p>
              Sabemos que, no gerenciamento de uma biblioteca, existem dezenas
              de tarefas que os funcionarios devem realizar diariamente.
            </p>
            <p>
              A Bookshelf veio com o intuito de otimizar todas essas tarefas
              oferecendo diversos serviços diretamente da nossa{" "}
              <strong>Dashboard</strong> 
              ,{" "} trazendo assim maior controle e velocidade durante o gerencimento
              do estabelecimento.
            </p>
            <h3>Deixe a gente te ajudar nessas tarefas</h3>
        <h4>Junte-se a Bookshelf</h4>
        <Btn href="/register">Contratar Serviços</Btn>
          </CtaText>
      </CtaContent>
    </CtaSec>
  );
};

export default CtaSection;
