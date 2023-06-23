// models/User.model.js

class User {
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
    this.courses = {
      id: obj.courses.id,
      active: obj.courses.active,
      name: obj.courses.name,
      classromom: obj.courses.classromom,
      period: obj.courses.period,
      module: obj.courses.module,
    };
  }

  getEmail() {
    const req = this.account.userContact.map((resp) => {
      if (resp.type === "email") {
        return resp;
      }
      return undefined;
    });
    return req ? req[0].contact : req;
  }
}

export default User;
