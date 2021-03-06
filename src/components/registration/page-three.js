import React, {
  Component
} from 'react'
import {
  Grid,
  Row,
  Col,
  Panel,
  Button
} from 'react-bootstrap'
import FieldGroup from '../forms/field-group'
import {
  connect
} from 'react-redux'
import {
  states,
  phoneTypes,
  yesNo,
  relationships
} from '../forms/lists'
import {
  save
} from '../../actions/registration'
import union from 'lodash/union'
import {
  disableValidation
} from '../../actions/registration'


class PageThree extends Component {

  page = 3;

  handleSubmit = (evt) => {
    evt.preventDefault();
    var formValues = {};
    var fields = [
      'weekdayPhoneNumber',
      'voiceMailNumber',
      'textMessageApproval',
      'familyMemberContact',
      'familyMemberRelationship',
      'familyMemberFirstName',
      'familyMemberLastName',
      'familyMemberContactAddress',
      'familyMemberAddressOne',
      'familyMemberAddressTwo',
      'familyMemberCity',
      'familyMemberState',
      'familyMemberZip',
      'rideHomeFirstName',
      'rideHomeLastName',
      'rideHomePrimaryPhone',
      'rideHomeOtherPhone',
      'rideHomeRelationship'
    ];

    for (var i in fields) {
      formValues[fields[i]] = this.props[fields[i]].value;
    }
    this.props.validate(formValues, this.page);
  }

  handleInputChange = (evt) => {
    this.props.disableValidation(this.page);
    this.props.handleInputChange(evt);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.validation) {

      var changes = {
        weekdayPhoneNumber: this.props.weekdayPhoneNumber.value,
        voiceMailNumber: this.props.voiceMailNumber.value,
        textMessageApproval: this.props.textMessageApproval.value,
        familyMemberContact: this.props.familyMemberContact.value,
        familyMemberRelationship: this.props.familyMemberRelationship.value,
        familyMemberFirstName: this.props.familyMemberFirstName.value,
        familyMemberLastName: this.props.familyMemberLastName.value,
        familyMemberContactAddress: this.props.familyMemberContactAddress.value,
        familyMemberAddressOne: this.props.familyMemberAddressOne.value,
        familyMemberAddressTwo: this.props.familyMemberAddressTwo.value,
        familyMemberCity: this.props.familyMemberCity.value,
        familyMemberState: this.props.familyMemberState.value,
        familyMemberZip: this.props.familyMemberZip.value,
        rideHomeFirstName: this.props.rideHomeFirstName.value,
        rideHomeLastName: this.props.rideHomeLastName.value,
        rideHomePrimaryPhone: this.props.rideHomePrimaryPhone.value,
        rideHomeOtherPhone: this.props.rideHomeOtherPhone.value,
        rideHomeRelationship: this.props.rideHomeRelationship.value,
      }

      save(this.props.emailToken, this.props.original, changes);
      this.props.goToPage(this.page + 1);
    }
  }

  getContactPreferences() {
    return (
      <Panel>
        <Panel.Heading>Contact Preferences</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="weekdayPhoneNumber"
                type="select"
                label="Choose a weekday contact phone number"
                value={this.props.weekdayPhoneNumber}
                options={union([{name:'Select', value:''}],phoneTypes)}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="voiceMailNumber"
                type="select"
                label="Choose the number where the healthcare team can leave a voice message"
                value={this.props.voiceMailNumber}
                options={union([{name:'Select', value:''}],phoneTypes)}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="textMessageApproval"
                type="select"
                label="Can the healthcare team send you a text message with healthcare information?"
                value={this.props.textMessageApproval}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  displayFamilyMemberInfo() {
    return (
      <span>
        <Row>
          <Col md={12}>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={11} mdOffset={1}>
            <p>Family Member Information</p>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdOffset={1}>
            <FieldGroup
              id="familyMemberFirstName"
              type="text"
              label="Family Member First Name"
              value={this.props.familyMemberFirstName}
              onChange={this.handleInputChange}
              />
          </Col>
          <Col md={6}>
            <FieldGroup
              id="familyMemberLastName"
              type="text"
              label="Family Member Last Name"
              value={this.props.familyMemberLastName}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        <Row>
          <Col md={5} mdOffset={1}>
            <FieldGroup
              id="familyMemberRelationship"
              type="select"
              label="Family Member Relationship to the Patient"
              value={this.props.familyMemberRelationship}
              options={union([{name:'Select', value:''}],relationships)}
              onChange={this.handleInputChange}
              />
          </Col>
          <Col md={6}>
            <FieldGroup
              id="familyMemberContactAddress"
              type="select"
              label="Does this family member have the same address as the patient?"
              value={this.props.familyMemberContactAddress}
              options={union([{name:'Select', value:''}],yesNo)}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        {this.props.familyMemberContactAddress.value !== 'no' || this.displayFamilyMemberAddress()}
      </span>
    )
  }

  displayFamilyMemberAddress() {
    return (
      <span>
        <Row>
          <Col md={11} mdOffset={1}>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={11} mdOffset={2}>
            <p>Family member address</p>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={2}>
            <FieldGroup
              id="familyMemberAddressOne"
              type="text"
              label="Address Line One"
              value={this.props.familyMemberAddressOne}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={2}>
            <FieldGroup
              id="familyMemberAddressTwo"
              type="text"
              label="Address Line Two"
              value={this.props.familyMemberAddressTwo}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        <Row>
          <Col md={5} mdOffset={2}>
            <FieldGroup
              id="familyMemberCity"
              type="text"
              label="City"
              value={this.props.familyMemberCity}
              onChange={this.handleInputChange}
            />
            </Col>
          <Col md={3}>
            <FieldGroup
              id="familyMemberState"
              type="select"
              label="State"
              value={this.props.familyMemberState}
              options={union([{name:'Select', value:''}],states)}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col md={2}>
            <FieldGroup
              id="familyMemberZip"
              type="text"
              label="Zip"
              value={this.props.familyMemberZip}
              onChange={this.handleInputChange}
            />
          </Col>
        </Row>
      </span>
    )
  }

  getFamilyContact() {
    return (
      <Panel>
        <Panel.Heading>Family Contact</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="familyMemberContact"
                type="select"
                label="In case of an emergency, is there a family member we should contact?"
                value={this.props.familyMemberContact}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          {this.props.familyMemberContact.value !== 'yes' || this.displayFamilyMemberInfo()}
        </Panel.Body>
      </Panel>
    )
  }

  getRideHomeInformation() {
    return (
      <Panel>
        <Panel.Heading>Ride Home Information</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="rideHomeFirstName"
                type="text"
                label="First Name"
                value={this.props.rideHomeFirstName}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="rideHomeLastName"
                type="text"
                label="Last Name"
                value={this.props.rideHomeLastName}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="rideHomePrimaryPhone"
                type="text"
                label="Primary Phone"
                value={this.props.rideHomePrimaryPhone}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="rideHomeOtherPhone"
                type="text"
                label="Other Phone"
                value={this.props.rideHomeOtherPhone}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="rideHomeRelationship"
                type="select"
                label="Relationship"
                value={this.props.rideHomeRelationship}
                options={union([{name:'Select', value:''}],relationships)}
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
          {this.getContactPreferences()}
          {this.getFamilyContact()}
          {this.getRideHomeInformation()}
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
    weekdayPhoneNumber: state.registration.weekdayPhoneNumber,
    voiceMailNumber: state.registration.voiceMailNumber,
    textMessageApproval: state.registration.textMessageApproval,
    familyMemberContact: state.registration.familyMemberContact,
    familyMemberRelationship: state.registration.familyMemberRelationship,
    familyMemberFirstName: state.registration.familyMemberFirstName,
    familyMemberLastName: state.registration.familyMemberLastName,
    familyMemberContactAddress: state.registration.familyMemberContactAddress,
    familyMemberAddressOne: state.registration.familyMemberAddressOne,
    familyMemberAddressTwo: state.registration.familyMemberAddressTwo,
    familyMemberCity: state.registration.familyMemberCity,
    familyMemberState: state.registration.familyMemberState,
    familyMemberZip: state.registration.familyMemberZip,
    rideHomeFirstName: state.registration.rideHomeFirstName,
    rideHomeLastName: state.registration.rideHomeLastName,
    rideHomePrimaryPhone: state.registration.rideHomePrimaryPhone,
    rideHomeOtherPhone: state.registration.rideHomeOtherPhone,
    rideHomeRelationship: state.registration.rideHomeRelationship,

    validation: state.registration.validation['3'],

    original: state.registration.original,

    emailToken: state.authentication.emailToken
  }), {
    disableValidation
  }
)(PageThree)