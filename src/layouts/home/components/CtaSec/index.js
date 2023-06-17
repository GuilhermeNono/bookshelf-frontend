import {
  CenterText,
  CtaContent,
  CtaImage,
  CtaSec,
  CtaText,
} from "assets/styledComponents/homeStyles";

import dashPng from "assets/images/dash.png";

function CtaSection() {
  return (
    <CtaSec>
      <CenterText>
        <h5>Dashboard</h5>
        <h2>Painel para todos os usuario</h2>
      </CenterText>

      <CtaContent>
        <CtaImage>
          <img src={dashPng} alt="dash" />
        </CtaImage>
        <CtaText>
          <h2>Painel de controle para todo o tipo de usuario</h2>
          <p>
            Sabemos que, no gerenciamento de uma biblioteca, existem dezenas de tarefas que os
            funcionarios devem realizar diariamente.
          </p>
          <p>
            A Bookshelf veio com o intuito de otimizar todas essas tarefas oferecendo diversos
            serviços diretamente da nossa <strong>Dashboard</strong>, trazendo assim maior controle
            e velocidade durante o gerencimento do estabelecimento.
          </p>
        </CtaText>
      </CtaContent>
    </CtaSec>
  );
}

export default CtaSection;
