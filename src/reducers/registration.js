import forOwn from 'lodash/forOwn'

export const REGISTRATION_LOAD = "REGISTRATION_LOAD";
export const UPDATE_REGISTRATION_VALUE = "UPDATE_REGISTRATION_VALUE";
export const UPDATE_REGISTRATION_VALIDATION = "UPDATE_REGISTRATION_VALIDATION";
export const UPDATE_PAGE = "UPDATE_PAGE";
export const DISABLE_VALIDATION = "DISABLE_VALIDATION";
export const STORE_ORIGINAL = "STORE_ORIGINAL";

const initState = {
  validation: {},
  page: 1,

  //Page One
  correctProcedure: {},
  docPerforming: {},
  unknownDocPerforming: {},
  procedurePerformed: {
    value: ''
  },
  procedureDate: {},
  procedureSite: {},

  correctFacility: {},
  institutionName: {
    value: 'Test Institution'
  },
  institutionAddressOne: {
    value: '1167 Massachusetts Ave'
  },
  institutionAddressTwo: {
    value: ''
  },
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
  middleName: {
    value: ''
  },
  lastName: {
    value: ''
  },
  suffix: {
    value: ''
  },
  preferredName: {
    value: ''
  },
  dateOfBirth: {
    value: ''
  },
  sex: {},
  mobilePhone: {
    value: ''
  },
  homePhone: {
    value: ''
  },
  emailAddress: {
    value: ''
  },
  workPhone: {
    value: ''
  },
  workPhoneExtension: {
    value: ''
  },
  addressOne: {
    value: ''
  },
  addressTwo: {
    value: ''
  },
  city: {
    value: ''
  },
  state: {},
  zip: {
    value: ''
  },
  primaryInsuranceType: {},
  secondaryInsurance: {},

  //Page Three
  weekdayPhoneNumber: {},
  voiceMailNumber: {},
  textMessageApproval: {},
  familyMemberContact: {},
  familyMemberRelationship: {},
  familyMemberFirstName: {
    value: ''
  },
  familyMemberLastName: {
    value: ''
  },
  familyMemberContactAddress: {},
  familyMemberAddressOne: {
    value: ''
  },
  familyMemberAddressTwo: {
    value: ''
  },
  familyMemberCity: {
    value: ''
  },
  familyMemberState: {},
  familyMemberZip: {
    value: ''
  },
  rideHomeFirstName: {
    value: ''
  },
  rideHomeLastName: {
    value: ''
  },
  rideHomePrimaryPhone: {
    value: ''
  },
  rideHomeOtherPhone: {
    value: ''
  },
  rideHomeRelationship: {},

  //Page Four
  heightFeet: {},
  heightInches: {},
  weight: {
    value: ''
  },
  cigaretteSmoker: {},
  cigarSmoker: {},
  drink: {},
  alcoholAbuse: {},
  drugs: {},
  physicalActivity: {},
  sex: {
    value: ''
  },
  malignantHypertermia: {},
  pseudocholinesteraseDeficiency: {},
  motionSickness: {},
  nauseaVomiting: {},
  adverseReaction: {
    value: ''
  },
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
    case STORE_ORIGINAL:
      return Object.assign({}, state, {
        original: action.payload
      })
    case DISABLE_VALIDATION:
      newState = Object.assign({}, state);
      newState.validation[action.payload] = false;
      return newState;
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