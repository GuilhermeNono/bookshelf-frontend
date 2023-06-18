export default class UserLibrary {

    #id;
    #name;
    #user;

    #userLogged;
    #userProfile;

	constructor(id, name, user) {
        this.#id = id;
        this.#name = name;
        this.#user = user;
	}

    set userLogged(userLoggedInstance) {
        this.#userLogged = userLoggedInstance;
    }

    set userProfile(userProfileInstance) {
        this.#userProfile = userProfileInstance;
    }

    get libraryName() {
        return this.#name;
    }

    get id() {
        return this.#id;
    }

    get libraryId() {
        return this.#id;
    }

    get libraryUserId() {
        return this.#user;
    }

    get userProfile() {
        return this.#userProfile;
    }

    get userLogged() {
        return this.#userLogged;
    }

}
