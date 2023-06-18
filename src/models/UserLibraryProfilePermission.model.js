export default class UserLibraryProfilePermission {

    
    #description;
    #code;
    
	constructor(description = "", code = "") {
        this.#code = code;
        this.#description = description;
	}

    get description() {
        return this.#description;
    }

    get code() {
        return this.#code;
    }
    
}