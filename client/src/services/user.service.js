import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:5000/api/user/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const editProfileService = (name, about, city,email , mobile ,facebook , twitter,linkedin) =>{
  let user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;

  return  axios.put(API_URL+"updateuser",{
    name, about, city,email , mobile ,facebook , twitter,linkedin
  },{
    headers: {
      'x-auth-token':token,
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
  }})
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  editProfileService
};