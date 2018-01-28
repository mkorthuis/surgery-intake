import {
  UPDATE_REGISTRATION_VALUE,
  UPDATE_REGISTRATION_VALIDATION,
  UPDATE_PAGE,
  DISABLE_VALIDATION
} from '../reducers/registration'
import forOwn from 'lodash/forOwn'
import forEach from 'lodash/forEach'
import {
  required,
  maxLength,
  number,
  phoneNumber,
  dateOfBirth,
  checked
} from './validation/rules'
import RegistrationApi from '../api/registration-api'
import moment from 'moment-es6'

var validateRules = {
  //Page One
  correctProcedure: [required],
  docPerforming: [],
  unknownDocPerforming: [],
  procedurePerformed: [],
  procedureDate: [],
  procedureSite: [],
  correctFacility: [required],
  institutionName: [],
  institutionAddressOne: [],
  institutionAddressTwo: [],
  institutionCity: [],
  institutionState: [],
  institutionZip: [],
  understandPatientNotice: [checked],
  ackOwnership: [checked],

  //Page Two
  firstName: [required, maxLength(50)],
  middleName: [maxLength(50)],
  lastName: [required, maxLength(50)],
  suffix: [maxLength(5)],
  preferredName: [maxLength(100)],
  dateOfBirth: [required, dateOfBirth],
  sex: [required],
  mobilePhone: [phoneNumber],
  homePhone: [phoneNumber],
  emailAddress: [required],
  workPhone: [phoneNumber],
  workPhoneExtension: [number],
  addressOne: [required],
  addressTwo: [required],
  city: [required],
  state: [required],
  zip: [required],
  primaryInsuranceType: [required],
  secondaryInsurance: [required],

  //Page Three
  weekdayPhoneNumber: [required],
  voiceMailNumber: [required],
  textMessageApproval: [required],
  familyMemberContact: [required],
  familyMemberRelationship: [],
  familyMemberFirstName: [],
  familyMemberLastName: [],
  familyMemberContactAddress: [],
  familyMemberAddressOne: [],
  familyMemberAddressTwo: [],
  familyMemberCity: [],
  familyMemberState: [],
  familyMemberZip: [],
  rideHomeFirstName: [required],
  rideHomeLastName: [required],
  rideHomePrimaryPhone: [required],
  rideHomeOtherPhone: [],
  rideHomeRelationship: [required],

  //Page Four
  heightFeet: [required, number],
  heightInches: [required, number],
  weight: [required, number],
  cigaretteSmoker: [required],
  cigarSmoker: [required],
  drink: [required],
  alcoholAbuse: [required],
  drugs: [required],
  physicalActivity: [required],
  snoreLoudly: [required],
  feelTired: [required],
  observedStopBreathing: [required],
  highBloodPressure: [required],
  neckCircumference: [required],
  malignantHypertermia: [required],
  pseudocholinesteraseDeficiency: [required],
  motionSickness: [required],
  nauseaVomiting: [required],
  adverseReaction: [],
  ekg: [required],
  chestXray: [required],
  sleepApnea: [required],
  cardiacStress: [required],
  cardiacEcho: [required],
  cardiacCatheterization: [required]
}

export function disableValidation(page) {
  return {
    type: DISABLE_VALIDATION,
    payload: page
  }
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
        dateOfBirth: patientHistory.date_of_birth ? moment(patientHistory.date_of_birth, 'YYYY-MM-DD').toISOString() : '',
        sex: patientHistory.birth_sex,
        suffix: patientHistory.suffix ? patientHistory.suffix : '',
        mobilePhone: patientHistory.mobile_number ? patientHistory.mobile_number : '',
        homePhone: patientHistory.home_phone ? patientHistory.home_phone : '',
        workPhone: patientHistory.work_other_number ? patientHistory.work_other_number : '',
        emailAddress: patientHistory.email ? patientHistory.email : '',
        addressOne: patientHistory.address1 ? patientHistory.address1 : '',
        addressTwo: patientHistory.address2 ? patientHistory.address2 : '',
        city: patientHistory.city ? patientHistory.city : '',
        postalCode: patientHistory.postalcode ? patientHistory.postalcode : '',
        state: patientHistory.state ? patientHistory.state : ''
      };
      dispatch(updateRegistrationValue(patientData));
    }).catch(error => {
      throw (error);
    })
  }
}