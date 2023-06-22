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
  }
}

export default User;
