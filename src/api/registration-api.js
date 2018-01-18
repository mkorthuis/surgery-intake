export const BASE_URL = 'https://cc-platform-grp1-stage.clinicalbox.com/lgh/';

class RegistrationApi {

  static validatePatientDateOfBirth(token, dateOfBirth) {
    return fetch(BASE_URL + 'validatemedhistorydob/' + token, {
      method: 'POST',
      body: JSON.stringify({
        'dob': dateOfBirth
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

  static updateMedicalHistory(token, data) {
    return fetch(BASE_URL + 'updatemedhistoryform/' + token).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }
}

export default RegistrationApi;