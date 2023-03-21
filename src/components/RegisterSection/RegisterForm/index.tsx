import React from "react";
import "./fonts/linearicons/style.css";
import "./css/style.css";
import "./vendor/date-picker/css/datepicker.min.css";
import "./fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import "./fonts/linearicons/style.css";
import { useState } from "react";
import { Container } from "./styles";

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
        <div className="wrapper">
          <div className="navtest">
            <div className="inner">
              <form onSubmit={handleSubmit}>
                <h3>Criar conta</h3>
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
                      <option value="0">Selecionar gênero</option>
                      <option value="1">M</option>
                      <option value="2">F</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />
                      Lorem ipsum dolor sit amet consectetur. Ipsum quis
                      ultrices egestas leo non neque malesuada.
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />
                      Lorem ipsum dolor sit amet consectetur. Ipsum quis
                      ultrices egestas leo non neque malesuada.
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <button data-text="Finalizar">
                  <span>Continuar</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="vendor/date-picker/js/datepicker.js"></script>
        <script src="vendor/date-picker/js/datepicker.en.js"></script>

        <script src="js/main.js"></script>
    </Container>
  );
}

export default RegisterForm;
