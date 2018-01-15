const required = (value, name) => (value ? undefined : (name ? name : 'This Field') + ' is Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' :
  undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ?
  'Only alphanumeric characters' :
  undefined
const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) ?
  'Invalid phone number, must be 10 digits' :
  undefined
const dateOfBirth = value => {
  if (value) {
    var d1 = Date.parse(value.replace(/([0-9]+)\/([0-9]+)/, '$2/$1'));
    if (d1 == null || isNaN(parseFloat(d1))) {
      return "Invalid date format ( _ _ / _ _ / _ _ _ _ )"
    }
  }
}



module.exports = {
  required: required,
  maxLength: maxLength,
  number: number,
  minValue: minValue,
  email: email,
  tooOld: tooOld,
  alphaNumeric: alphaNumeric,
  phoneNumber: phoneNumber,
  dateOfBirth: dateOfBirth
}