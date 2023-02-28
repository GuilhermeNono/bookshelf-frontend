import { Container, ImgContainer, CardContent, CardTitle, Btn, Button, P, A, CardBody, Img } from "./styles";

interface cardProps{
  title:string;
  imageUrl:string;
  body:string;
}

function Card({body, imageUrl, title}:cardProps) {
  return (
    <Container>
      <ImgContainer>
          <Img src={imageUrl} alt=''></Img>
      </ImgContainer>

      <CardContent>
          <CardTitle>
            {title}
          </CardTitle>
          <CardBody>
            <P>{body}</P>
          </CardBody>
      </CardContent>

      <>
        <Button>
          <A>Saiba Mais</A>
        </Button>
      </>

    </Container>
  );
}

export default Card