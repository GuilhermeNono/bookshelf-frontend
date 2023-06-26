export default class RegisterUser {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : [];
    this.accountInfo = {
      firstName: obj.firstName,
      lastName: obj.lastName,
      password: obj.password,
      confirmPassword: obj.confirmPassword,
      birthyDay: obj.birthyDay,
      phone: obj.phone,
      gender: obj.gender,
      profileId: obj.profileId,
      cpf: obj.cpf,
    };
    this.rmRa = obj.rmRa;
    this.userImage = obj.profilePicture;
    this.libId = obj.libId;
    this.coursesId = obj.coursesId;
  }
}
