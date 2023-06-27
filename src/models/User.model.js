export default class User {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.id = obj.id;
    this.name = obj.personName;
    this.cpf = obj.cpf;
    this.active = obj.active;
    this.gender = obj.gender;
    this.birthyDay = obj.birthDay.substring(0, 10).split("-").reverse().join("/");
    this.updatedAt = obj.updatedAt;
    this.userContacts = obj.contacts;
  }

  getEmail() {
    const req = this.userContacts.find((resp) => resp.type === "email");
    return req ? req.contact : null;
  }

  getPhone() {
    const req = this.userContacts.find((resp) => resp.type === "phone");
    return req ? req.contact : null;
  }
}
