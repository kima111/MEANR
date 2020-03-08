import axios from "axios";

export default {
  authenticateUser: function(username, password) {
      console.log("HERE")
   axios.post("/api/user", {
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
  }
};
