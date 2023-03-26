import React from "react";

import { useState } from "react";
import {
  Check,
  Container,
  Inner,
  RegForm,
  Submit,
  Title,
  Wrapper,
} from "./styles";

function RegisterForm() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Wrapper>
        <Inner>
          <RegForm onSubmit={handleSubmit}>
            <Title>Criar conta</Title>
            <p>
              Para utilizar os serviços é preciso ter uma conta em nosso
              sistema.
            </p>
            <div className="form-row">
              <div className="form-wrapper">
                <label>Nome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Informe seu nome"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div className="form-wrapper">
                <label>Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Informe seu nome"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-wrapper">
                <label>Endereço de e-mail</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="informe seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-wrapper">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="form-wrapper">
                <label>Confirmar senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-wrapper">
                <label>CPF</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="form-wrapper">
                <label>Data de nascimento</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-wrapper">
                <label>Celular</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Telefone de contato"
                />
              </div>
              <div className="form-wrapper">
                <label>Sexo</label>
                <select name="" id="" className="form-control">
                  <option value="0">Selecionar</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <Check>
                <label>
                  <input type="checkbox"></input>
                  Lorem ipsum dolor sit amet consectetur. Ipsum quis ultrices
                  egestas leo non neque malesuada.
                </label>
              </Check>
            </div>
            <div className="form-row">
              <Check>
                <label>
                  <input type="checkbox" />
                  Lorem ipsum dolor sit amet consectetur. Ipsum quis ultrices
                  egestas leo non neque malesuada.
                </label>
              </Check>
            </div>

            <Submit data-text="Finalizar">
              <span>Continuar</span>
            </Submit>
          </RegForm>
        </Inner>
      </Wrapper>

      <script src="js/jquery-3.3.1.min.js"></script>

      <script src="js/main.js"></script>
    </Container>
  );
}

export default RegisterForm;
