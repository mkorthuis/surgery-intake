import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Grid,
  Row,
  Col,
  Panel,
  Button
} from 'react-bootstrap'
import {
  updateRegistrationValue,
  disableValidation,
  save
} from '../../actions/registration'
import FieldGroup from '../forms/field-group'
import {
  states,
  gender,
  insuranceTypes,
  yesNo
} from '../forms/lists'
import union from 'lodash/union'
import moment from 'moment-es6';

class PageTwo extends Component {

  page = 2;


  handleSubmit = (evt) => {
    evt.preventDefault();
    var formValues = {};
    var fields = [
      'firstName',
      'middleName',
      'lastName',
      'suffix',
      'preferredName',
      'dateOfBirth',
      'sex',
      'addressOne',
      'addressTwo',
      'city',
      'state',
      'homePhone',
      'mobilePhone',
      'workPhone',
      'workPhoneExtension'
    ];
    for (var i in fields) {
      formValues[fields[i]] = this.props[fields[i]].value;
    }
    this.props.validate(formValues, this.page);
  }

  handleDateOFBirthChange = (formatted, raw) => {
    this.props.disableValidation(this.page);

    //Since we know it is a DOB, we are smarter than the regular parser
    if (formatted) {
      this.props.updateRegistrationValue({
        'dateOfBirth': formatted
      });
    } else if (!formatted && moment(raw, ['M/D/YYYY'], true).isValid()) {
      this.props.updateRegistrationValue({
        'dateOfBirth': moment(raw, ['M/D/YYYY']).toISOString()
      });
    } else {
      this.props.updateRegistrationValue({
        'dateOfBirth': null
      });
    }
  }

  handleInputChange = (evt) => {
    this.props.disableValidation(this.page);
    this.props.handleInputChange(evt);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.validation) {
      // TODO don't do the mapping here. Do it in the action.
      var changes = {
        firstName: this.props.firstName.value,
        middleName: this.props.middleName.value,
        lastName: this.props.lastName.value,
        suffix: this.props.suffix.value,
        preferredName: this.props.preferredName.value,
        dateOfBirth: this.props.dateOfBirth.value,
        sex: this.props.sex.value,
        address1: this.props.addressOne.value,
        address2: this.props.addressTwo.value,
        city: this.props.city.value,
        state: this.props.state.value,
        postalcode: this.props.zip.value,
        mobilePhone: this.props.mobilePhone.value,
        homePhone: this.props.homePhone.value,
        workPhone: this.props.workPhone.value,
        workPhoneExtension: this.props.workPhoneExtension.value,
        email: this.props.emailAddress.value,
        primaryInsuranceType: this.props.primaryInsuranceType.value,
        secondaryInsurance: this.props.secondaryInsurance.value,
      }

      save(this.props.emailToken, this.props.original, changes);
      this.props.goToPage(this.page + 1);
    }
  }

  getPatientInformation() {
    return (
      <Panel>
        <Panel.Heading>Patient Information</Panel.Heading>
        <Panel.Body>
        <Row>
          <Col md={3}>
            <FieldGroup
              id="firstName"
              type="text"
              label="First Name"
              value={this.props.firstName}
              onChange={this.handleInputChange}
              />
          </Col>
          <Col md={3}>
            <FieldGroup
              id="middleName"
              type="text"
              label="Middle Name"
              value={this.props.middleName}
              onChange={this.handleInputChange}
              />
          </Col>
          <Col md={4}>
            <FieldGroup
              id="lastName"
              type="text"
              label="Last Name"
              value={this.props.lastName}
              onChange={this.handleInputChange}
              />
          </Col>
          <Col md={2}>
            <FieldGroup
              id="suffix"
              type="text"
              label="Suffix (e.g., Jr., Sr.)"
              value={this.props.suffix}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        <Row> 
          <Col md={6}>
            <FieldGroup
              id="preferredName"
              type="text"
              label="Preferred Name"
              value={this.props.preferredName}
              onChange={this.handleInputChange}
              />
          </Col>
          <Col md={4}>
            <FieldGroup 
              id="dateOfBirth"
              type="datePicker"
              label="Patient Date of Birth  ( MM / DD / YYYY )"
              value={this.props.dateOfBirth}
              onChange={this.handleDateOFBirthChange}
            />
          </Col>
          <Col md={2}>
            <FieldGroup
              id="sex"
              type="select"
              label="Gender"
              value={this.props.sex}
              options={union([{name:'Select', value:''}],gender)}
              onChange={this.handleInputChange}
            />
          </Col>
        </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getPatientAddress() {
    return (
      <Panel>
        <Panel.Heading>Patient Address</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="addressOne"
                type="text"
                label="Address 1"
                value={this.props.addressOne}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="addressTwo"
                type="text"
                label="Address 2"
                value={this.props.addressTwo}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <FieldGroup
                id="city"
                type="text"
                label="City"
                value={this.props.city}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col md={3}>
              <FieldGroup
                id="state"
                type="select"
                label="State"
                value={this.props.state}
                options={union([{name:'Select', value:''}],states)}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col md={2}>
              <FieldGroup
                id="zip"
                type="text"
                label="Zip"
                value={this.props.zip}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getContactNumbers() {
    return (
      <Panel>
        <Panel.Heading>Contact Numbers</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="mobilePhone"
                type="text"
                label="Mobile Phone"
                value={this.props.mobilePhone}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="homePhone"
                type="text"
                label="Home Phone"
                value={this.props.homePhone}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row> 
            <Col xs={12}>
              <FieldGroup
                id="emailAddress"
                type="text"
                label="Email Address"
                value={this.props.emailAddress}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FieldGroup
                id="workPhone"
                type="text"
                label="Work Phone"
                value={this.props.workPhone}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={4}>
              <FieldGroup
                id="workPhoneExtension"
                type="text"
                label="Extension"
                value={this.props.workPhoneExtension}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getInsuranceInformation() {
    return (
      <Panel>
        <Panel.Heading>Insurance Information</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="primaryInsuranceType"
                type="select"
                label="Primary Insurance"
                value={this.props.primaryInsuranceType}
                options={union([{name:'Select', value:''}],insuranceTypes)}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="secondaryInsurance"
                type="select"
                label="Secondary Insurance?"
                value={this.props.secondaryInsurance}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid className="main-grid">
          {this.getPatientInformation()}
          {this.getContactNumbers()}
          {this.getPatientAddress()}
          {this.getInsuranceInformation()}
          <Row className="last-row">
            <Col xs={12}>
              <Button bsStyle="primary" type="submit">
                Save and continue
              </Button>
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
}

export default connect(
  (state) => ({
    firstName: state.registration.firstName,
    middleName: state.registration.middleName,
    lastName: state.registration.lastName,
    suffix: state.registration.suffix,
    preferredName: state.registration.preferredName,
    dateOfBirth: state.registration.dateOfBirth,
    sex: state.registration.sex,
    addressOne: state.registration.addressOne,
    addressTwo: state.registration.addressTwo,
    city: state.registration.city,
    state: state.registration.state,
    zip: state.registration.zip,
    mobilePhone: state.registration.mobilePhone,
    homePhone: state.registration.homePhone,
    workPhone: state.registration.workPhone,
    workPhoneExtension: state.registration.workPhoneExtension,
    emailAddress: state.registration.emailAddress,
    primaryInsuranceType: state.registration.primaryInsuranceType,
    secondaryInsurance: state.registration.secondaryInsurance,

    validation: state.registration.validation['2'],

    original: state.registration.original,

    emailToken: state.authentication.emailToken
  }), {
    updateRegistrationValue,
    disableValidation
  }
)(PageTwo)