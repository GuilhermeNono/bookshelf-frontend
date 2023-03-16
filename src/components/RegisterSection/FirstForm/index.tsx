import React from "react";
import Register from "../../../pages/Register";

import { useState } from "react";
import {
  Input,
  LabelFloat,
  Info,
  Box,
  Col,
  H2,
  NameDiv,
  PButton,
  Subtitle,
  Spacing,
  Botao,
} from "./styles";

const FirstForm = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();


  };


  return (
    <Box>
      {/* <TitleBox>
            <Titulo>Registro</Titulo>
          </TitleBox>*/}

      <Col>
        <H2>Criar uma conta na Bookshelf</H2>
        <Info>
          Para utilizar os serviços é preciso ter uma conta em nosso sistema.
        </Info>
      </Col>
      {/* TODO: */}
      <form onSubmit={handleSubmit}>
        <LabelFloat>
          <NameDiv>
            <div>
              <Subtitle>Nome</Subtitle>
              <Input
                type="text"
                name="nome"
                placeholder=""
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <Spacing />
            <div>
              <Subtitle>Sobrenome</Subtitle>
              <Input
                type="text"
                name="nome"
                placeholder=""
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </NameDiv>
        </LabelFloat>

        <LabelFloat>
          <Subtitle>E-mail</Subtitle>
          <Input
            type="email"
            name="nome"
            placeholder="Informe seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </LabelFloat>

        <LabelFloat>
          <Subtitle>Senha</Subtitle>
          <Input
            type="password"
            name="senha"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </LabelFloat>

        <LabelFloat>
          <Subtitle>Confirmar senha</Subtitle>
          <Input
            type="password"
            name="confSenha"
            placeholder=""
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </LabelFloat>
        <PButton>
          <Botao type="submit" value="Enviar" />
        </PButton>
      </form>
      <Info></Info>
    </Box>
  );
};

export default FirstForm;
