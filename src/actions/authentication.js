import {
  LOGIN,
  CHANGE_DATE_OF_BIRTH,
  VALIDATE
} from '../reducers/authentication'

export function login(change) {
  return {
    type: LOGIN,
    payload: change
  }
}

export function validate(valid, message) {
  return {
    type: VALIDATE,
    payload: {
      valid: valid,
      message: message,
      touched: true
    }
  }
}

export function setDateOfBirth(date) {
  return {
    type: CHANGE_DATE_OF_BIRTH,
    payload: date
  }
}