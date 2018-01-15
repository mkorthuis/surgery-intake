import forOwn from 'lodash/forOwn'

export const REGISTRATION_LOAD = "REGISTRATION_LOAD";
export const UPDATE_REGISTRATION_VALUE = "UPDATE_REGISTRATION_VALUE";
export const UPDATE_REGISTRATION_VALIDATION = "UPDATE_REGISTRATION_VALIDATION";
export const UPDATE_PAGE = "UPDATE_PAGE";

const initState = {
  validation: {},
  page: 1,

  //Page One
  firstName: {},
  middleInitial: {},
  lastName: {},
  preferredName: {},
  dateOfBirth: {},
  sex: {},
  addressOne: {},
  addressTwo: {},
  city: {},
  state: {},
  mobilePhone: {},
  homePhone: {},
  workPhone: {},
  workPhoneExtension: {},

  //Page Two
  institutionName: {
    value: 'Test Institution'
  },
  institutionAddress: {
    value: '1167 Massachusetts Ave, Arlington, MA 02476'
  },
  incorrectFacility: {
    value: true
  },
  understandPatientNotice: {},
  ackOwnership: {},
  docPerforming: {},
  procedureSite: {},
  procedureSurgeryConsultType: {},
  procedureSurgeryConsultReason: {},
  weekdayPhoneType: {},
  voiceMailNumber: {},
  textMessageApproval: {},
  familyMemberContact: {},
  familyMemberRelationship: {},
  familyMemberFirstName: {},
  familyMemberLastName: {},
  familyMemberContact: {},
  primaryInsuranceType: {},
  secondaryInsurance: {}

};

function updateValues(state, values) {
  forOwn(values, function(value, key) {
    var newField = Object.assign({}, state[key]);
    forOwn(value, function(subValue, subKey) {
      newField[subKey] = subValue;
    });
    state[key] = newField;
  });
}

export default (state = initState, action) => {
  var newState;
  switch (action.type) {
    case UPDATE_REGISTRATION_VALUE:
      newState = Object.assign({}, state);
      updateValues(newState, action.payload);
      return newState;
    case UPDATE_REGISTRATION_VALIDATION:
      newState = Object.assign({}, state);
      updateValues(newState, action.payload.vals);
      forOwn(action.payload.validation, function(value, key) {
        newState.validation[key] = value;
      });
      return newState;
    case UPDATE_PAGE:
      return Object.assign({}, state, {
        page: action.payload
      });
    case REGISTRATION_LOAD:
    default:
      return state
  }
}