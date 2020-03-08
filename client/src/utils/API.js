import axios from "axios";

export default {
  authenticateUser: function(username, password) {
   axios.post("/", {
       username, 
       password
   })
   .then(response=>{
       console.log(response)
       if(response.data){
           console.log('successful signup')
       }
       else{
           console.log('logon error')
       }
   })
   .catch(error=>{
       console.log('Sign in server error: ');
       console.log(error)
   })
  }
};
