class UserDTO {

    id;
    firstname;
    lastname;

    constructor(data) {
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
    }
}

class UserDetailDTO {

    id;
    firstname;
    lastname;
    gender;
    birthdate;


    constuctor(data) {
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.gender = data.gender;
        this.birthdate = data.birthdate;
    }
}

module.exports = {
    UserDTO,
    UserDetailDTO
}