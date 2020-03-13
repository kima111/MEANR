import axios from "axios";
import { Redirect } from "react-router-dom";

export default {
//authenticate user route

    authenticateUser: function(userData) {
        return new Promise((resolve, reject) =>{
            axios.post("/api/user/login", userData)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                console.log(error)
                reject(Error("failed to login"))
            })
        })
    
    },
//register user route
    registerUser: function(firstName, lastName, username, password, email) {
        axios.post("/api/user/register", {
            firstName,
            lastName,
            username, 
            password,
            email
        })
        .then(response=>{
            if(response.data){
                console.log('successful signup')
            }
            else{
                console.log('logon error')
            }
        })
        .catch(error=>{
            console.log('Sign in server error: ' + error);
        })
    },


};
