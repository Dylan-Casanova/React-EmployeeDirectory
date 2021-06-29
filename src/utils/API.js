import axios from "axios";
// making api call using axios
export default {
    generateEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=20");
    }
};