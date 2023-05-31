export default class Author {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.completeName = `${this.firstName} ${this.lastName}`;
    // TODO: Existe uma nova coluna na tabela de Autores. O nome da coluna em questão é "Avatar" que armazena uma imagem do autor.
  }
}
