import UserLibrary from "./UserLibrary.model";

export default class UserLogged {

    #token;
    #accountId;
    #librariesAccount = [];

    constructor(token = "", accountId = 0) {
        this.#token = token;
        this.#accountId = accountId;
    }

    /**
     * @param {UserLibrary[]} librariesAccountInstance
     */
    set librariesAccount(librariesAccountInstance) {
        this.#librariesAccount.push(librariesAccountInstance);
    }

    get token() {
        return this.#token;
    }

    get accountId() {
        return this.#accountId;
    }

    get librariesAccount() {
        return this.#librariesAccount;
    }
}