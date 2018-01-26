import forOwn from 'lodash/forOwn'

export const REGISTRATION_LOAD = "REGISTRATION_LOAD";
export const UPDATE_REGISTRATION_VALUE = "UPDATE_REGISTRATION_VALUE";
export const UPDATE_REGISTRATION_VALIDATION = "UPDATE_REGISTRATION_VALIDATION";
export const UPDATE_PAGE = "UPDATE_PAGE";

const initState = {
  validation: {},
  page: 1,

  //Page One
  correctProcedure: {},
  docPerforming: {},
  unknownDocPerforming: {},
  procedurePerformed: {},
  procedureDate: {},
  procedureSite: {},

  correctFacility: {},
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
  understandPatientNotice: {},
  ackOwnership: {},

  //Page Two
  firstName: {
    value: ''
  },
  middleName: {},
  lastName: {
    value: ''
  },
  suffix: {},
  preferredName: {},
  dateOfBirth: {
    value: ''
  },
  sex: {},
  mobilePhone: {},
  homePhone: {},
  emailAddress: {},
  workPhone: {},
  workPhoneExtension: {},
  addressOne: {},
  addressTwo: {},
  city: {},
  state: {},
  zip: {},
  primaryInsuranceType: {},
  secondaryInsurance: {},

  //Page Three
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
  rideHomeFirstName: {},
  rideHomeLastName: {},
  rideHomePrimaryPhone: {},
  rideHomeOtherPhone: {},
  rideHomeRelationship: {},

  //Page Four
  heightFeet: {},
  heightInches: {},
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
  snoreLoudly: {},
  feelTired: {},
  observedStopBreathing: {},
  highBloodPressure: {},
  neckCircumference: {},
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