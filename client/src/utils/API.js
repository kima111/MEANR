import axios from "axios";

export default {
//authenticate user route
    authenticateUser: function(userData) {
        axios.post("/api/user/login", userData)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
//    .then(response=>{
//         // console.log(response.data)
//         if(response.data){
//             console.log('successful signup')
//         }
//        else{
//             console.log('logon error')
//         }
//     })
//    .catch(error=>{
//         console.log('Sign in server error: ' + error);
//     })
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
