export default class Course {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.id = obj.id;
    this.name = obj.name;
    this.classroom = obj.classroom;
    this.module = obj.module;
    this.period = obj.period;
    this.active = obj.active;
  }
}
