export const LOGIN = "LOGIN";
export const CHANGE_DATE_OF_BIRTH = "CHANGE_DATE_OF_BIRTH";
export const CHANGE_EMAIL_TOKEN = "CHANGE_EMAIL_TOKEN";
export const VALIDATE = "VALIDATE";

const initState = {
  loggedIn: false,
  dateOfBirth: '',
  message: '',
  valid: false,
  touched: false,
  emailToken: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        loggedIn: action.payload
      });
    case VALIDATE:
      return Object.assign({}, state, {
        valid: action.payload.valid,
        message: action.payload.message,
        touched: action.payload.touched
      })
    case CHANGE_DATE_OF_BIRTH:
      return Object.assign({}, state, {
        dateOfBirth: action.payload
      });
    case CHANGE_EMAIL_TOKEN:
      return Object.assign({}, state, {
        emailToken: action.payload
      });
    default:
      return state
  }
}