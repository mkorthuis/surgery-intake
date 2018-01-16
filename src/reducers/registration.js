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
  institutionAddressOne: {
    value: '1167 Massachusetts Ave'
  },
  institutionAddressTwo: {},
  institutionCity: {
    value: 'Arlington'
  },
  institutionState: {
    value: 'MA'
  },
  institutionZip: {
    value: '024746'
  },
  correctFacility: {},
  understandPatientNotice: {},
  ackOwnership: {},
  docPerforming: {},
  unknownDocPerforming: {},
  procedureDate: {},
  procedureSite: {},
  procedureSurgeryConsultType: {},
  procedureSurgeryConsultReason: {},
  weekdayPhoneNumber: {},
  voiceMailNumber: {},
  textMessageApproval: {},
  familyMemberContact: {},
  familyMemberRelationship: {},
  familyMemberFirstName: {},
  familyMemberLastName: {},
  familyMemberContactAddress: {},
  familyMemberAddressOne: {},
  familyMemberAddressTwo: {},
  familyMemberCity: {},
  familyMemberState: {},
  familyMemberZip: {},
  primaryInsuranceType: {},
  secondaryInsurance: {},
  rideHomeFirstName: {},
  rideHomeLastName: {},
  rideHomePrimaryPhone: {},
  rideHomeOtherPhone: {},
  rideHomeRelationship: {},

  //Page Three
  weight: {},
  cigaretteSmoker: {},
  cigarSmoker: {},
  drink: {},
  alcoholAbuse: {},
  drugs: {},
  physicalActivity: {},
  malignantHypertermia: {},
  pseudocholinesteraseDeficiency: {},
  motionSickness: {},
  nauseaVomiting: {},
  adverseReaction: {},
  ekg: {},
  chestXray: {},
  sleepApnea: {},
  cardiacStress: {},
  cardiacEcho: {},
  cardiacCatheterization: {}

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