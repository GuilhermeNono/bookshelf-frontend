import Author from "./Author.model";
import Category from "./Category.model";

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
    this.available = obj.available;
    this.categories = obj.categories
      ? obj.categories.map((categoryData) => new Category(categoryData.name).name)
      : [];
    this.authors = obj.authors
      ? obj.authors.map(
          (authorData) => new Author(authorData.firstName, authorData.lastName).completeName
        )
      : [];
  }
}