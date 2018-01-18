import {
  LOGIN,
  CHANGE_DATE_OF_BIRTH,
  CHANGE_EMAIL_TOKEN,
  VALIDATE
} from '../reducers/authentication'
import RegistrationApi from '../api/registration-api'
import moment from 'moment-es6'

export function login(change) {
  return {
    type: LOGIN,
    payload: change
  }
}

export function setDateOfBirth(date) {
  return {
    type: CHANGE_DATE_OF_BIRTH,
    payload: date
  }
}

export function setEmailToken(token) {
  return {
    type: CHANGE_EMAIL_TOKEN,
    payload: token
  }
}

export function validate(token, dateOfBirth) {
  return function(dispatch) {
    var formattedDOB = moment(dateOfBirth).format('YYYY-MM-DD')
    return RegistrationApi.validatePatientDateOfBirth(token, formattedDOB).then(valid => {
      dispatch({
        type: VALIDATE,
        payload: {
          valid: (valid && valid === "true"),
          message: (valid && valid === "true") ? '' : 'Invalid date format ( _ _ / _ _ / _ _ _ _ ). Please enter 01/01/1958',
          touched: true
        }
      })
    }).catch(error => {
      throw (error);
    });
  };
}