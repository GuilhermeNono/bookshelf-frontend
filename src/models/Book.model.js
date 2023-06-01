import Author from "./Author.model";
import Category from "./Category.model";

export default class Book {
  constructor(obj) {
    // eslint-disable-next-line no-param-reassign
    obj = obj != null ? obj : {};
    this.code = obj.lib_code;
    // ? Propriedade Cape_type adicionada recentemente: capeType = Dura | Comum
    this.capeType = obj.cape_type;
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
          (authorData) => new Author(authorData.firstName, authorData.lastName, authorData.avatar)
        )
      : [];
    this.code = obj.lib_code;
    this.typeCape = obj.cape_type;
  }
}
