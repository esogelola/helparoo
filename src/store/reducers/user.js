import { SET_FIRST_NAME, SET_LAST_NAME, SET_DOB } from "../actions/actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  dob: "",
};

const userReducer = (state = initialState, action) => {
  const newState = (() => {
    switch (action.type) {
      case SET_FIRST_NAME:
        return { ...state, firstName: action.payload };
      case SET_LAST_NAME:
        return { ...state, lastName: action.payload };
      case SET_DOB:
        return { ...state, dob: action.payload };
      default:
        return state;
    }
  })();
  return newState;
};

export default userReducer;
