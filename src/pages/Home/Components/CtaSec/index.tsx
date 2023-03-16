import { CenterText } from "../../styles";
import { CtaContent, CtaImage, CtaSec } from "./styles";

const CtaSection = () => {
    return (
        <CtaSec>
        <CenterText>
          <h5>Trusted By</h5>
          <h2>500+ Leading Universities And Companies</h2>
        </CenterText>

        <CtaContent>
          <CtaImage>
            <img src="img/cta1.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta2.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta3.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta4.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta5.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta6.png" />
          </CtaImage>
        </CtaContent>
      </CtaSec>
    )
}

export default CtaSection;