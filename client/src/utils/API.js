import axios from "axios";

export default {
  authenticateUser: function() {
      console.log("R:LKJE:LKJRE")
    return axios.get("/api/user");
  },
};
