import axios from "axios";

const API_URL = "http://localhost:5000/api/admin/";

const getAllUsers = () => {
    return axios.get(API_URL + "allusers");
};

const getAllProperties = () => {
    return axios.get(API_URL + "allproperties");
}

const approuveProperty = (id) => {
    return axios.post(API_URL + "approve-property",{id})
}

export default {
    getAllUsers,
    getAllProperties,
    approuveProperty
}