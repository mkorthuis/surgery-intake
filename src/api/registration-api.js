export const BASE_URL = 'https://cc-platform-grp1-stage.clinicalbox.com/lgh/';

class RegistrationApi {

  static validatePatientDateOfBirth(token, dateOfBirth) {
    return fetch(BASE_URL + 'validatemedhistorydob', {
      method: 'POST',
      body: JSON.stringify({
        'dob': dateOfBirth,
        'form_token': token
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

  static getCurrentMedicalHistory(token) {
    return fetch(BASE_URL + 'getmedhistoryformbytoken/' + token).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

  static getPatientInfo(token) {
    return fetch(BASE_URL + 'getpatientinfotoken/' + token).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

  static updateMedicalHistory(token, data, finalize) {
    return fetch(BASE_URL + 'updatemedhistoryform/' + token + (finalize ? '?finalize=true' : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static sendAttempts(token, history) {
    return fetch(BASE_URL + 'sendmedhiserror/' + token, {
      method: 'POST',
      body: JSON.stringify({
        'error_message': 'Patient could not validate',
        'detail_message': 'Patient could not validate after three tries',
        'patient_dob': history
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default RegistrationApi;