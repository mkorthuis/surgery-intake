export const REGISTRATION_LOAD = "REGISTRATION_LOAD";
export const REGISTRATION_UPDATE = "REGISTRATION_UPDATE";

const initState = {
  page: 1,
  firstName: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case REGISTRATION_UPDATE:
      return Object.assign({}, state, action.payload);
    case REGISTRATION_LOAD:
    default:
      return state
  }
}