import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.5s;
  animation: ease-in;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;
  color: #1a2e40;
  font-family: "Rubik", sans-serif;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const CardTitle = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
`;

// h3, p{
//     margin: 0;
//     padding: 0;
// }

export const Btn = styled.button`
  display: flex;
  justify-content: center;
`;

// .btn{
//     display: flex;
//     justify-content: center;
// }

// .btn button{
//     padding: 0.5rem;
//     background-color: #1B8EF2;
//     border:none;
//     transition: 0.2s;

//     border-radius: 3px;
//     width: 100%;
//     position: relative;
// }

// .btn:hover{
//     background: rgba(27, 156, 252, 0.1);
// }

// a{
//     text-transform: uppercase;
//     color: #FFFFFF;
//     text-decoration: none;
//     font-weight: bold;
// }
