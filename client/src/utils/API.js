import axios from "axios";

export default{
    authenticateUser: function(userData) {
        return new Promise((resolve, reject) => {
            axios.post("/api/login", userData)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    console.log("Login server error: ");
                    console.log(error);
                    reject(Error("Failed to login"));
                });
        });
    }
}