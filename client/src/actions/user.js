import { EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAIL, SET_MESSAGE } from "./types";

import editprofile from "../services/user.service";

export const editProfile =
  (name, about, city, email, mobile, facebook, twitter, linkedin) =>
  (dispatch) => {
    return editprofile
      .editProfileService(
        name,
        about,
        city,
        email,
        mobile,
        facebook,
        twitter,
        linkedin
      )
      .then(
        (response) => {
          dispatch({
            type: EDIT_PROFILE_SUCCESS,
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
            type: EDIT_PROFILE_FAIL,
          });

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        }
      );
  };
