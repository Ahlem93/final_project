import axios from "axios";
import {
    FEATURED_PROPERTIES_SUCCESS,
    FEATURED_PROPERTIES_FAIL,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAIL,
    SET_MESSAGE
  } from "./types";

  import PropertyService from "../services/property_service";

  export const featuredProperty = () => (dispatch) => {
      return PropertyService.getFeaturedProperty().then(
          (response) =>{
            dispatch({
                type: FEATURED_PROPERTIES_SUCCESS,
                payload : response
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
              type: FEATURED_PROPERTIES_FAIL,
            });
      
            dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
      
            return Promise.reject();
          }
      );
  };
  export const addProperty = (propertyTitle, bedrooms, city,address , surface ,price , description) => (dispatch) => {
    // axios.post("http://localhost:5000/api/property/addproperty",newProperty)
    //     .then((response) => {

    //         dispatch(addNewProperty(response.data));
    //         alert("Property is successfully added");
    //     }).catch((error) => {
    // });
    return PropertyService.addPropertyService(propertyTitle, bedrooms, city,address , surface ,price , description).then(
      (response) => {
        dispatch({
          type: ADD_PROPERTY_SUCCESS,
          payload : response
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
            type : ADD_PROPERTY_FAIL,
          });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    )
};
