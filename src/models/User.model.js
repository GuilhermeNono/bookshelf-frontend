export default class User {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.libId = obj.userLibId;
    this.rmRa = obj.rmRa;
    this.userImage = obj.profilePicture;
    this.active = obj.active;
    this.userAccount = obj.account;
    this.userCourses = obj.courses;
  }
}
