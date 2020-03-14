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
                reject(Error("failed to login error: " + error))
            })
        })
    
    },
//register user route
    registerUser: function(regData) {
        return new Promise((resolve, reject) => {
        axios.post("/api/user/register", regData)
        .then(response=>{
            if(response.data){
                resolve(response)
            }
            else{
                console.log('logon error')
            }
        })
        .catch(error=>{
            reject(Error("failed to register error: " + error))
        })
    })
    },


};
