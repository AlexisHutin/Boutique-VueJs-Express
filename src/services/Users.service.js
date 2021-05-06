import axios from "axios";

class UsersService {
  constructor() {
    this.axios = axios.create();
  }

  createUser(userdatas) {
    let url = "http://localhost:3000/users/signup";
    return this.axios
      .post(url, {
        userdatas,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Création du compte valider");
          window.location = "/";
        }
        return response;
      });
  }
}

export default new UsersService();
