/**
 * @summary Essa classe faz referencia ao usuario que está logado no momento. Na classe possuem todas as informações do usuario.
 */
export default class UserLogged {
  #token;

  #accountId;

  #librariesAccount = [];

  /**
   * @constructor
   * @param {string} token - Token de acesso
   * @param {number} accountId - Id da conta do usuario
   * @param {Array} libraries - Bibliotecas pertencentes ao usuario
   */
  constructor(token = "", accountId = 0, libraries = []) {
    this.#token = token;
    this.#accountId = accountId;
    this.#librariesAccount = libraries;
  }

  /**
   * @param {Array} librariesAccountInstance
   */
  set librariesAccount(librariesAccountInstance) {
    // this.#librariesAccount.push(librariesAccountInstance);
    this.#librariesAccount = librariesAccountInstance;
  }

  get librariesAccount() {
    return this.#librariesAccount;
  }

  get token() {
    return this.#token;
  }

  get accountId() {
    return this.#accountId;
  }
}
