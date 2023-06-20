/**
 * @summary Essa classe faz referencia ao usuario que está logado no momento. Na classe possuem todas as informações que pertencem ao usuario.
 */
export default class UserLogged {
  #token;

  #accountId;

  #accountProfile;

  #librariesAccount = [];

  /**
   * @constructor
   * @param {string} token - Token de acesso
   * @param {number} accountId - Id da conta do usuario
   * @param {Array} libraries - Bibliotecas pertencentes ao usuario
   * @param {string} accountProfile - Perfil presente na conta do usuario
   */
  constructor(token = "", accountId = 0, libraries = [], accountProfile = "") {
    this.#token = token;
    this.#accountId = accountId;
    this.#librariesAccount = libraries;
    this.#accountProfile = accountProfile;
  }

  /**
   * @param {Array} librariesAccountInstance
   */
  set librariesAccount(librariesAccountInstance) {
    this.#librariesAccount = librariesAccountInstance;
  }

  get librariesAccount() {
    return this.#librariesAccount;
  }

  get accountProfile() {
    return this.#accountProfile;
  }

  get token() {
    return this.#token;
  }

  get accountId() {
    return this.#accountId;
  }
}
