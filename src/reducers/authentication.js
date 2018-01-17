export const LOGIN = "LOGIN";

const initState = {
  loggedIn: false,
  dateOfBirth: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        loggedIn: action.payload
      });
    default:
      return state
  }
}