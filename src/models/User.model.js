export default class User {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.userEmail = obj.email;
    this.userActive = obj.active;
    this.userCreatedAt = obj.createdAt;
    this.userUpdatedAt = obj.updatedAt;
  }
}
