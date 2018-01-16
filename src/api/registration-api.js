class RegistrationApi {

  static getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default RegistrationApi;