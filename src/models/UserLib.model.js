class UserLib {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.userLibId = obj.userLibId;
    this.rmRa = obj.rmRa;
    this.profilePicture = obj.profilePicture;
    this.active = obj.active;
    this.account = {
      id: obj.account.id,
      active: obj.account.active,
      personName: obj.account.personName,
      userContact: obj.account.userContact,
    };
    this.courses = obj.courses;
  }

  getEmail() {
    const req = this.account.userContact.find((resp) => resp.type === "email");
    return req ? req.contact : null;
  }

  getPhone() {
    const req = this.account.userContact.find((resp) => resp.type === "phone");
    return req ? req.contact : null;
  }
}

export default UserLib;
