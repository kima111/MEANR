import axios from "axios";

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
    registerUser: function(regData) {
        return new Promise((resolve, reject) => {
        axios.post("/api/user/register", regData)
        .then(response=>{
            if(response.data){
                console.log('successful signup')
                resolve(response)
            }
            else{
                console.log('logon error')
            }
        })
        .catch(error=>{
            console.log('Sign in server error: ' + error);
            reject(Error("failed to register"))
        })
    })
    },


};
