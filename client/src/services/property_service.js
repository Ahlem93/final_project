import axios from "axios";

const API_URL = "http://localhost:5000/api/property/";

const getFeaturedProperty = () => {
    return axios.get(API_URL + "get-featured");
};

const addPropertyService = (propertytitle, bedrooms, city,address , surface ,price , description) => {
  let user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;

  return  axios.post(API_URL+"addproperty",{
    propertytitle, bedrooms, city,address , surface ,price , description
    } ,  {
      headers: {
        'x-auth-token':token,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }})
}

// const searchProperty = () => {
//     return axios.get(API_URL + "get-featured");
// }

export default {
    getFeaturedProperty,
    addPropertyService
  };
  
