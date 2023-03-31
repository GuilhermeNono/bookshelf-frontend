import { Check, Form, Submit, Title } from "./styles";


function RegForm() {
  return (
    <Form>
      <Title>Criar conta</Title>
      <p>Para utilizar os serviços é preciso ter uma conta em nosso sistema.</p>
      <div className="form-row">
        <div className="form-wrapper">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Informe seu nome"
          />
        </div>
        <div className="form-wrapper">
          <label>Sobrenome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Informe seu sobrenome"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrapper">
          <label>Endereço de e-mail</label>
          <input
            type="email"
            className="form-control emailInput"
            placeholder="informe seu email"
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
          />
        </div>
        <div className="form-wrapper">
          <label>Confirmar senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirme sua senha"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-wrapper">
          <label>CPF</label>
          <input
            type="number"
            className="form-control"
            placeholder="Informe seu CPF"
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
          <div>
            <p>
              <input type="checkbox"></input>&nbsp; Lorem ipsum dolor sit amet
              consectetur. Ipsum quis ultrices egestas leo non neque malesuada.
            </p>
          </div>
        </Check>
      </div>
      <div className="form-row">
        <Check>
          <div>
            <p>
              <input type="checkbox"></input>&nbsp; Lorem ipsum dolor sit amet
              consectetur. Ipsum quis ultrices egestas leo non neque malesuada.
            </p>
          </div>
        </Check>
      </div>

      <Submit data-text="Finalizar">
        <span>Continuar</span>
      </Submit>
    </Form>
  );
}

export default RegForm;
