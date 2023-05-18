export default class Book {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.name = obj.name;
    this.publisher = obj.publisher;
    this.edition = obj.edition;
    this.sinopse = obj.sinopse;
    this.language = obj.language;
    this.publicationDate = obj.publication_date;
    this.isbn = obj.isbn;
    this.numberPages = obj.number_pages;
    this.cape = obj.cape;
    this.categories = obj.categories;
    this.authors = obj.authors;
  }
}
