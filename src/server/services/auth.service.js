import axios from 'axios';

const API_URL = "http://localhost:3000/api/auth";

class AuthService {
    login(username, password) {
        return axios
        .post(API_URL + "signin", {
            username,
            password
        })
        .then(response => {
            if(response.data.acessToken) {
                localStorage.setItem("user", JSON.stringify(responce.data));
            }

            return response.data
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    
}