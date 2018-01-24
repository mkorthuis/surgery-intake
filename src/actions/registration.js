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
import moment from 'moment-es6'

var validateRules = {
  //Page One
  firstName: [required, maxLength(50)],
  middleName: [],
  lastName: [required, maxLength(50)],
  preferredName: [maxLength(100)],
  dateOfBirth: [required, dateOfBirth],
  sex: [required],
  addressOne: [required],
  addressTwo: [required],
  city: [required],
  state: [required],
  zip: [required],
  mobilePhone: [phoneNumber],
  homePhone: [phoneNumber],
  workPhone: [phoneNumber],
  workPhoneExtension: [number],
  emailAddress: [required],

  //Page Two
  procedureSurgeryConsultType: [required],
  procedureSurgeryConsultReason: [required],

  //Page Three
  height: [required, number],
  weight: [required, number]
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

export function load(token) {
  return function(dispatch) {
    return RegistrationApi.getCurrentMedicalHistory(token).then(patientHistory => {
      var patientData = {
        firstName: patientHistory.first_name,
        lastName: patientHistory.last_name,
        dateOfBirth: patientHistory.date_of_birth ? moment(patientHistory.date_of_birth, 'YYYY-MM-DD').toISOString() : ''
      };
      dispatch(updateRegistrationValue(patientData));
    }).catch(error => {
      throw (error);
    })
  }
}