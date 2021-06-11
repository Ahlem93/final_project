import axios from "axios";

const API_URL = "http://localhost:5000/api/property/";

const getFeaturedProperty = () => {
    return axios.get(API_URL + "get-featured");
};

const addPropertyService = (propertytitle, bedrooms, city,address , surface ,price , description  ) => {
  let user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;

  return  axios.post(API_URL+"addproperty",{
    propertytitle, bedrooms, city,address , surface ,price , description 
    } ,  {
      headers: {
        'x-auth-token':token,
    } , 
  })
}

// const searchProperty = () => {
//     return axios.get(API_URL + "get-featured");
// }
const getPropertyByID = (id) => {
  return axios.post(API_URL + "single-property",{id});
};
const searchProperties= (city) => {
  return axios.post(API_URL + "search-properties",{city});
};

const addComment = (messageTitle , message , propertyId) => {
  let user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;

  return axios.post(API_URL + "add-comment",{messageTitle , message , propertyId},{
    headers: {
      'x-auth-token':token,
  } , 
});
}

const getCommentsByProperty = (property) => {
  console.log(property);
  return axios.post(API_URL + "get-comments",{property});
}

const getPropertyByUser = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;
  return axios.get(API_URL + "dashbordAgent",{
  headers: {
    'x-auth-token':token,
} , 
});
}

export default {
    getFeaturedProperty,
    addPropertyService,
    getPropertyByID,
    searchProperties,
    addComment,
    getCommentsByProperty,
    getPropertyByUser
  };
  
