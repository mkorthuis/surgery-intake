import {
  LOGIN
} from '../reducers/authentication'

export function login(change) {
  return {
    type: LOGIN,
    payload: change
  }
}