import { Container, ImgContainer, CardContent, CardTitle, Btn } from "./styles";

interface cardProps{
  title:string;
  imageUrl:string;
  body:string;
}

function Card({body, imageUrl, title}:cardProps) {
  return (
    <Container>
      <ImgContainer>
          <img src={imageUrl} alt=''></img>
      </ImgContainer>

      <CardContent>
          <CardTitle className='card-title'>
            {title}
          </CardTitle>
          <div className="card-body">
            <p>{body}</p>
          </div>
      </CardContent>

      <>
        <button>
          <a>Saiba Mais</a>
        </button>
      </>

    </Container>
  );
}

export default Card