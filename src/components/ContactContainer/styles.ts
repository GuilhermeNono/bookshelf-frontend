import styled from "styled-components";

export const MainContainer = styled.div`
  height: auto;
  margin: 0.5rem;
  margin-top: 8rem;
  padding: 0.5rem;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextContainer = styled.div`
  color: #335675;
  max-width: 60%;
`;
export const H2 = styled.h2`
  color: #ffff;
  text-align: center;
  margin: 1rem;
`;

export const H3 = styled.h3`
  color: #ffff;
  margin: 0.5rem;
`;

export const P = styled.p``;

export const Desc = styled.p`
  margin-bottom: 3rem;
`;

export const ContainerInfo = styled.div`
  height: 500px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0.5rem;
  padding: 0.5rem;
`;

export const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 300px;
  color: #335675;
  border-radius: 7px;
  border-style: none;
`;

export const TextBox = styled.textarea`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 300px;
  color: #335675;
  border-radius: 7px;
  border-style: none;
  resize: none;
  height: 100px;
`;

export const Button = styled.button`
  padding: 0.5rem;
  width: 100px;
  background-color: #1b8ef2;
  border: none;
  border-radius: 7px;
  color: #ffff;
  margin-top: 10px;
  align-self: center;
  transition: 0.5s;
  animation: ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;
