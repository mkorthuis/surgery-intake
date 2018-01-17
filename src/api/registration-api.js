class RegistrationApi {

  static getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

  static postData(data) {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'POST',
      body: JSON.stringify(data),
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