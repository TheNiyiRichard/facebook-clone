// User class
export class User {
    constructor(id, name, userName, email) {
        this._id = id;
        this._name = name;
        this._userName = userName;
        this._email = email;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get userName() {
        return this._userName;
    }

    get email() {
        return this._email;
    }

    getInfo() {
        return `
            <p>ID: ${this._id}</p>
            <p>Name: ${this._name}</p>
            <p>Username: ${this._userName}</p>
            <p>Email: ${this._email}</p>
        `;
    }
}

// Subscriber class
export class Subscriber extends User {
    constructor(data) {
        super(data.id, data.name, data.userName, data.email);
        this._pages = data.pages || [];
        this._groups = data.groups || [];
        this._canMonetize = data.canMonetize || false;
    }

    get pages() {
        return this._pages;
    }

    get groups() {
        return this._groups;
    }

    get canMonetize() {
        return this._canMonetize;
    }

    getInfo() {
        return `
            ${super.getInfo()}
            <p>Pages: ${this._pages.join(', ')}</p>
            <p>Groups: ${this._groups.join(', ')}</p>
            <p>Can Monetize: ${this._canMonetize ? 'Yes' : 'No'}</p>
        `;
    }
}
