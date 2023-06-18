import ApiRouteBuild from "helpers/ApiRouteBuild";
import UserLibraryProfilePermission from "./UserLibraryProfilePermission.model";

export default class UserLibraryProfile{

    #id;
    #permissions = [];
    #userLibrary;
    #nameProfile;

	constructor(id = 0) {
        this.#id = id;
	}

    getAllProfileData() {
        try {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.#userLibrary.userLogged.token}`
              };
    
              const requestOptions = {
                method: "GET",
                headers,
              };
    
            fetch(`${ApiRouteBuild.buildRoute("libProfile")}/${this.#id}`, requestOptions)
            .then(resp => resp.json())
            .then(prof => {
                this.#nameProfile = prof.name
                this.addPermissions(prof.libraryPermissions)
            })
        } catch (error) {
            throw error;
        }
       
    }

    addPermissions(newPermission) {
        newPermission.forEach(({description, code}) => {
                this.#permissions.push(new UserLibraryProfilePermission(description, code));
        });
    }

    /**
     * @param {UserLibrary} userLibraryInstance
     */
    set userLibrary(userLibraryInstance) {
        this.#userLibrary = userLibraryInstance;
    }

    get id() {
        return this.#id;
    }

    get nameProfile() {
        return this.nameProfile;
    }

    get permissions() {
        return this.#permissions;
    }

    get userLibrary() {
        return this.#userLibrary;
    }
    
}