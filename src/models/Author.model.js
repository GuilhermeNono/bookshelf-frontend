export default class Author {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.completeName = `${this.firstName} ${this.lastName}`;
  }
}
