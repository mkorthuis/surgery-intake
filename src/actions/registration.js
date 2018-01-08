import {
  REGISTRATION_UPDATE
} from '../reducers/registration'

export const updateRegistration = (change) => ({
  type: REGISTRATION_UPDATE,
  payload: change
})