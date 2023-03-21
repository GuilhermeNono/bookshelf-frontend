import { CenterText } from "../../styles";
import { CtaContent, CtaImage, CtaSec, CtaText} from "./styles";

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
            <CtaText>
            <h2>Painel de controle para todo o tipo de usuario</h2>
            <p>
              Todos os usuarios que possuirem uma conta no site da Bookshelf
              poderão usufruir de uma dashboard com dezenas de serviços.
            </p>
            </CtaText>
          </CtaImage>
        </CtaContent>
      </CtaSec>
    );
}

export default CtaSection;