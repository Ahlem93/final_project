import { GETALL_USERS_SUCCESS, GETALL_USERS_FAIL,GETALL_PROPERTIES_SUCCESS,GETALL_PROPERTIES_FAIL , APPROUVE_PROPERTY_SUCCESS , APPROUVE_PROPERTY_FAIL } from "../actions/types";

const allusers = [];
const allProperties = []
const approuved  = Boolean;
const initialState  =  {
   allusers,
   allProperties,
   approuved,
};
  
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALL_USERS_SUCCESS:
      return {
        ...state,
        allusers: payload,
      };
    case GETALL_PROPERTIES_SUCCESS:
      return {
        ...state,
        allProperties: payload
      }
      case GETALL_PROPERTIES_FAIL:
        return {
          ...state,
          allProperties: null,
        };
    case APPROUVE_PROPERTY_SUCCESS:
      return {
        ...state,
        approuved: payload
      }
      case APPROUVE_PROPERTY_FAIL:
        return {
          ...state,
          approuved: null,
        };
      default:
        return state;
  }
}
