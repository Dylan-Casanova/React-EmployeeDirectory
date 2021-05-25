import axios from "axios";

export default {
    generateEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=20");
    }
};