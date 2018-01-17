import {
  UPDATE_REGISTRATION_VALUE,
  UPDATE_REGISTRATION_VALIDATION,
  UPDATE_PAGE
} from '../reducers/registration'
import forOwn from 'lodash/forOwn'
import forEach from 'lodash/forEach'
import {
  required,
  maxLength,
  number,
  phoneNumber,
  dateOfBirth
} from './validation/rules'
import RegistrationApi from '../api/registration-api'

var validateRules = {
  //Page One
  firstName: [required, maxLength(50)],
  middleInitial: [maxLength(2)],
  lastName: [required, maxLength(50)],
  preferredName: [maxLength(100)],
  dateOfBirth: [required, dateOfBirth],
  sex: [required],
  addressOne: [required],
  addressTwo: [required],
  city: [required],
  state: [required],
  mobilePhone: [phoneNumber],
  homePhone: [phoneNumber],
  workPhone: [phoneNumber],
  workPhoneExtension: [number],

  //Page Two
  procedureSurgeryConsultType: [required],
  procedureSurgeryConsultReason: [required],

  //Page Three
  height: [required],
  weight: [required]
}

export function updateRegistrationValue(change) {
  var vals = {};
  forOwn(change, function(value, key) {
    vals[key] = {};
    vals[key].value = value;
  });

  return {
    type: UPDATE_REGISTRATION_VALUE,
    payload: vals
  }
}

export function validateFields(fields, page) {
  var payload = {};
  var valid = true;
  payload.vals = {};
  forOwn(fields, function(value, key) {
    payload.vals[key] = {};
    payload.vals[key].validation = null;
    payload.vals[key].message = null;
    payload.vals[key].touched = true;
    forEach(validateRules[key], function(rule) {
      var message = rule(value);
      if (message) {
        payload.vals[key].validation = 'error';
        payload.vals[key].message = message;
        valid = false;
      }
    });
    payload.validation = {};
    payload.validation[page] = valid;
  });
  return {
    type: UPDATE_REGISTRATION_VALIDATION,
    payload: payload
  }
}

export function updatePage(page) {
  return {
    type: UPDATE_PAGE,
    payload: page
  }
}

export function fetchData() {
  return function(dispatch) {
    return RegistrationApi.getData().then(registration => {
      dispatch(updatePage(4));
    }).catch(error => {
      throw (error);
    });
  };
}