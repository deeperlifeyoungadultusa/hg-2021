import { combineReducers } from "redux";

import {
  GET_MESSAGES,
  SIGN_OUT,
  VERIFY_LOGIN,
  LOGIN,
  LOGIN_ERROR,
  SELECT_SPEAKER,
} from "../actions/types";

const initialState = {
  messages: [],
};

const initialLoginState = {
  authenticated: false,
  user: {},
  error: "",
};

const initialSpeakerState = {
  speaker: "all",
};

const loginReducer = (state = Object.assign({}, initialLoginState), action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: !!action.payload,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case VERIFY_LOGIN:
      return {
        ...state,
        authenticated: !!action.payload,
        user: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        authenticated: !!action.payload,
        user: {},
      };

    default:
      return state;
  }
};

const messageReducer = (state = Object.assign({}, initialState), action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload(),
      };

    default:
      return state;
  }
};

const speakerReducer = (
  state = Object.assign({}, initialSpeakerState),
  action
) => {
  switch (action.type) {
    case SELECT_SPEAKER:
      return {
        ...state,
        speaker: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  messages: messageReducer,
  login: loginReducer,
  speaker: speakerReducer,
});
