import {
  FEATURED_PROPERTIES_SUCCESS,
  FEATURED_PROPERTIES_FAIL,
  ADD_PROPERTY_SUCCESS,
  ADD_PROPERTY_FAIL,
  SET_MESSAGE,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAIL,
  SEARCH_PROPERTIES_SUCCESS,
  SEARCH_PROPERTIES_FAIL,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  GET_AGENTPROPERTY_SUCCESS,
  GET_AGENTPROPERTY_FAIL,
  DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_FAIL
} from "./types";

import PropertyService from "../services/property_service";

export const featuredProperty = () => (dispatch) => {
  return PropertyService.getFeaturedProperty().then(
    (response) => {
      dispatch({
        type: FEATURED_PROPERTIES_SUCCESS,
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
export const addProperty =
  (formData) =>
  (dispatch) => {
    return PropertyService.addPropertyService(
      formData
    ).then(
      (response) => {
        dispatch({
          type: ADD_PROPERTY_SUCCESS,
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
          type: ADD_PROPERTY_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };
export const getPropertyByID = (id) => (dispatch) => {
  return PropertyService.getPropertyByID(id).then(
    (response) => {
      dispatch({
        type: GET_PROPERTY_SUCCESS,
        payload: response.data.singleProperty,
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
        type: GET_PROPERTY_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const searchProperty = (city) => (dispatch) => {
  return PropertyService.searchProperties(city).then(
    (response) => {
      dispatch({
        type: SEARCH_PROPERTIES_SUCCESS,
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
        type: SEARCH_PROPERTIES_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const addComment = (messageTitle, message, propertyId) => (dispatch) => {
  return PropertyService.addComment(messageTitle, message, propertyId).then(
    (response) => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
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
        type: ADD_COMMENT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getCommentsByProperties = (id) => (dispatch) => {
  return PropertyService.getCommentsByProperty(id).then(
    (response) => {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: response.data.comments,
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
        type: GET_COMMENTS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const PropertyByUser = () => (dispatch) => {
  return PropertyService.getPropertyByUser().then(
    (response) => {
      dispatch({
        type: GET_AGENTPROPERTY_SUCCESS,
        payload: response.data.agentProperties,
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
        type: GET_AGENTPROPERTY_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const removeProperty = (id) => (dispatch) => {
  return PropertyService.removeProperty(id).then(
    (response) => {
      dispatch({
        type: DELETE_PROPERTY_SUCCESS,
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
        type: DELETE_PROPERTY_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};