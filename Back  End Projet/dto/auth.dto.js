class authDTO {

    id;
    login;
    hashdPassword;

    constructor(data) {
        this.id = data.id;
        this.login = data.login;
        this.hashedPassword = data.hashedPassword;
    }
}

module.exports = authDTO;