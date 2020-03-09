import axios from "axios";

export default {
//authenticate user route
    authenticateUser: function(username, password) {
        axios.post("/api/user/login", {
            username, 
            password
    })
   .then(response=>{
        console.log(response.data)
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
//register user route
    registerUser: function(firstName, lastName, username, password, email) {
        console.log("HERE")
        axios.post("/api/user/register", {
            firstName,
            lastName,
            username, 
            password,
            email
        })
        .then(response=>{
            console.log(response.data)
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
