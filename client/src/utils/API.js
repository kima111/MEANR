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
//logout user
logoutUser: function(userData) {
    return new Promise((resolve, reject) =>{
        axios.post("/api/user/logout", userData)
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
//register user route
getUsers: function() {
    return new Promise((resolve, reject) => {
    axios.get("/api/user/findAll")
    .then(response=>{
        resolve(response)
    })
    .catch(error=>{
        reject(Error("error: " + error))
    })
})
},
//submit forum
    submitForum: function(forumData){
        return new Promise((resolve, reject) => {
            axios.post("/api/forum/createForum", forumData)
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            reject(Error(error))
        })
        })
    },
//get forum
    getForums: function(){
    return new Promise((resolve, reject) => {
        axios.get("/api/forum/getForums")
    .then(response=>{
        resolve(response)
    })
    .catch(error=>{
        reject(Error(error))
    })
    })
    },
//delete forum
    deleteForum: function(id){
        return new Promise((resolve, reject) => {
            axios.delete("/api/forum/deleteForum/" + id)
        
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            reject(Error(error))
        })
    })
    },
//send text message
    sendTextMessage: function(textData){
        return new Promise((resolve, reject) => {
            axios.post("/api/text/sendTextMessage/", textData)
        
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            reject(Error(error))
        })
    })
    },
//send email
    sendEmail: function(emailData){
        return new Promise((resolve, reject) => {
            console.log(emailData)
            axios.post("/api/email/sendEmail/", emailData)
        
        .then(response=>{
            console.log(response)
            // resolve(response)
        })
        .catch(error=>{
            console.log(error)
            // reject(Error(error))
        })
    })
    },
//send payment
sendPayment: function(paymentData){
    return new Promise((resolve, reject) => {
        axios.post("/api/payment/sendPayment/", paymentData)
        .then(response=>{
            console.log(response)
            resolve(response)
        })
        .catch(error=>{
            console.log(error)
            reject(Error(error))
        })
    })
    }
};
