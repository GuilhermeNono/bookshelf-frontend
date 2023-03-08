import ImgTest from "../../../public/assets/images/testeimg.png";
import {
  Button,
  CardContainer,
  Container,
  ContentInformation,
  DataDetails,
  DetailsInformation,
  ImgBox,
  Lines,
  TextDataDetails,
  TextDetails,
} from "./styles";

interface cardProps {
  title: string;
  imageUrl: string;
  body: string;
}

export function Card({ body, imageUrl, title }: cardProps) {
  return (
    <Container>
      <CardContainer>
        <Lines></Lines>
        <ImgBox>
          <img src={imageUrl} alt="img" />
        </ImgBox>

        <ContentInformation>
          <DetailsInformation>
            <TextDetails>
              <h2>{title}</h2>
            </TextDetails>

            <DataDetails>{body}</DataDetails>
          </DetailsInformation>
          <Button>Saiba Mais</Button>

 


        </ContentInformation>
        
      </CardContainer>
    </Container>
  );
}
