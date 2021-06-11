import {
    FEATURED_PROPERTIES_SUCCESS,
    FEATURED_PROPERTIES_FAIL,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAIL,
    GET_PROPERTY_SUCCESS,
    GET_PROPERTY_FAIL,
    SEARCH_PROPERTIES_SUCCESS,
    SEARCH_PROPERTIES_FAIL,
    GET_AGENTPROPERTY_SUCCESS,
    GET_AGENTPROPERTY_FAIL
  } from "../actions/types";

    const properties = [];

    const initialState = properties
    ? { isProperty: true, properties }
    : { isProperty: false, properties: null };


  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FEATURED_PROPERTIES_SUCCESS:
          return {
            ...state,
            isProperty: true,
            properties: payload,
          };
        case FEATURED_PROPERTIES_FAIL:
          return {
            ...state,
            isProperty: false,
            properties: null,
          };
        case ADD_PROPERTY_SUCCESS:
          return {
            ...state,
          };
        case ADD_PROPERTY_FAIL:
          return {
            ...state,
          };
        case GET_PROPERTY_SUCCESS:
          return {
            ...state,
            properties : payload,
          };
        case GET_PROPERTY_FAIL:
          return {
            ...state,
          };
          case SEARCH_PROPERTIES_SUCCESS:
            return {
              ...state,
              isProperty: true,
              properties: payload,
            };
          case SEARCH_PROPERTIES_FAIL:
            return {
              ...state,
              isProperty: false,
              properties: null,
            };

            case GET_AGENTPROPERTY_SUCCESS:
              return {
                ...state,
                isProperty: true,
                properties: payload,
              };
            case GET_AGENTPROPERTY_FAIL:
              return {
                ...state,
                isProperty: false,
                properties: null,
              };
        default:
          return state;
      }
  }

