import {GETALL_USERS_SUCCESS,GETALL_USERS_FAIL,SET_MESSAGE,GETALL_PROPERTIES_SUCCESS,GETALL_PROPERTIES_FAIL , APPROUVE_PROPERTY_SUCCESS , APPROUVE_PROPERTY_FAIL} from "./types";
import {getAllUsers,getAllProperties} from "../services/admin_service";
import AdminService from "../services/admin_service";


export const getUsers = () => (dispatch) => {
    return AdminService.getAllUsers().then(
      (response) => {
        dispatch({
          type: GETALL_USERS_SUCCESS,
          payload: response.data.users,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: GETALL_USERS_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const getProperties = () => (dispatch) => {
    return AdminService.getAllProperties().then(
      (response) => {
        dispatch({
          type: GETALL_PROPERTIES_SUCCESS,
          payload: response.data.properties,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: GETALL_PROPERTIES_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };


  export const approuveProperty = (id) => (dispatch) => {
    return AdminService.approuveProperty(id).then(
      (response) => {
        dispatch({
          type: APPROUVE_PROPERTY_SUCCESS,
          payload: response.data.msg,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: APPROUVE_PROPERTY_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );

  }