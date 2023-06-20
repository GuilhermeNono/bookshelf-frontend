export default class Loan {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.id = obj.user_id;
    this.userName = obj.user_name;
    this.bookId = obj.book_identifier;
    this.books = obj.book;
    this.overdue = obj.overdue;
    this.courses = obj.user_courses;
    this.loanDate = obj.loan_date;
    this.returnDate = obj.return_date;
    this.renewalDate = obj.renewal_date;
    this.active = obj.is_active;
  }
}
