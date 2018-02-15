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

export function sendAttempts(token, history) {
  return function(dispatch) {
    return RegistrationApi.sendAttempts(token, history).then(valid => {
      //NO OP - We just send the attempts for now and let them keep trying.
    }).catch(error => {
      throw (error);
    })
  }
}

export function validate(token, dateOfBirth) {

  if (!dateOfBirth) {
    return ({
      type: VALIDATE,
      payload: {
        valid: false,
        message: 'Invalid date.  Please enter with the following format: MM/DD/YYYY **01/01/1958**',
        touched: true,
        token: token,
        dateOfBirth: dateOfBirth
      }
    });
  }
  if (!token) {
    return ({
      type: VALIDATE,
      payload: {
        valid: false,
        message: 'Invalid access. Please reopen your email and click your personalized link again',
        touched: true,
        token: token,
        dateOfBirth: dateOfBirth
      }
    });
  }

  return function(dispatch) {
    var formattedDOB = moment(dateOfBirth).format('YYYY-MM-DD')
    return RegistrationApi.validatePatientDateOfBirth(token, formattedDOB).then(valid => {
      dispatch({
        type: VALIDATE,
        payload: {
          valid: (valid && valid === "true"),
          message: (valid && valid === "true") ? '' : 'We could not validate your date of birth',
          touched: true,
          token: token,
          dateOfBirth: dateOfBirth
        }
      })
    }).catch(error => {
      throw (error);
    });
  };
}