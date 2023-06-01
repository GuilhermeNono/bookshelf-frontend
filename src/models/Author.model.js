export default class Author {
  constructor(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.completeName = `${this.firstName} ${this.lastName}`;
    this.avatar = avatar;
  }
}
