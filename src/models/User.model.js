// import UserAccounts from "./UserAccount.model";

// export default class User {
//   constructor(obj) {
//     // eslint-disable-next-line no-param-reassign
//     obj = obj != null ? obj : {};
//     this.libIdUser = obj.userLibId;
//     this.registerRmRa = obj.rmRa;
//     this.userImage = obj.profilePicture;
//     this.active = obj.active;
//     this.userAccount = obj.account
//       ? new UserAccounts(
//           obj.account.id,
//           obj.account.active,
//           obj.account.personName,
//           obj.account.contacts
//         )
//       : [];
//     // this.userContact = obj.account.userContact;
//     this.userCourses = obj.courses;
//   }
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
    this.courses = obj.courses;
    // this.courses = {
    //   id: obj.courses.id,
    //   active: obj.courses.active,
    //   name: obj.courses.name,
    //   classroom: obj.courses.classroom,
    //   period: obj.courses.period,
    //   module: obj.courses.module,
    // };
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

export default User;
