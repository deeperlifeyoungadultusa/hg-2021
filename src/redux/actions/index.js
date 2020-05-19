import firebase, { database, messages, refLocation } from "../../firebase";
import {
  LOGIN,
  VERIFY_LOGIN,
  SIGN_OUT,
  LOGIN_ERROR,
  GET_MESSAGES,
  SELECT_SPEAKER,
} from "./types";

export const login = (email, password) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({
        type: LOGIN,
        payload: user,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err,
      });
    });
};

export const verifyLogin = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: VERIFY_LOGIN,
        payload: user,
      });
    } else {
      signOut();
    }
  });
};

export const signOut = () => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() =>
      dispatch({
        type: SIGN_OUT,
        payload: "",
      })
    );
};

export const getMessages = () => (dispatch) => {
  messages.on("value", (snapshot) => {
    dispatch({
      type: GET_MESSAGES,
      payload: () => {
        const val = snapshot.val();
        const array = [];

        if (val) {
          Object.keys(val).forEach((key, i) => {
            array.push({ [key]: val[key] });
            array[i].id = key;
          });
        }
        return array;
      },
    });
  });
};

export const deleteMessage = (id) => (dispatch) => {
  const userRef = database.ref(refLocation).child(id);
  userRef
    .remove()
    .then()
    .catch((e) => console.log(e));
};

export const addMessage = (message) => (dispatch) => messages.push(message);

export const selectSpeaker = (speaker) => (dispatch) => {
  dispatch({
    type: SELECT_SPEAKER,
    payload: speaker,
  });
};
