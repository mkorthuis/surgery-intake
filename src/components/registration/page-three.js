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
  states
} from '../forms/lists'
import union from 'lodash/union'


class PageThree extends Component {

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
      'primaryInsuranceType',
      'secondaryInsurance',
      'rideHomeFirstName',
      'rideHomeLastName',
      'rideHomePrimaryPhone',
      'rideHomeOtherPhone',
      'rideHomeRelationship'
    ];

    for (var i in fields) {
      formValues[fields[i]] = this.props[fields[i]].value;
    }
    this.props.validate(formValues, 3);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.validation) {
      this.props.goToPage(4);
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
                options={[{name:'Select', value:''},{name:'Mobile', value:'mobile'},{name:'Home', value:'home'},{name:'Work / Other', value:'work'}]}
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="voiceMailNumber"
                type="select"
                label="Choose the number where the healthcare team can leave a voice message"
                value={this.props.voiceMailNumber}
                options={[{name:'Select', value:''},{name:'Mobile', value:'mobile'},{name:'Home', value:'home'},{name:'Work / Other', value:'work'}]}
                onChange={this.props.handleInputChange}
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
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange}
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
              onChange={this.props.handleInputChange}
              />
          </Col>
          <Col md={6}>
            <FieldGroup
              id="familyMemberLastName"
              type="text"
              label="Family Member Last Name"
              value={this.props.familyMemberLastName}
              onChange={this.props.handleInputChange}
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
              options={[{name:'Select', value:''},{name:'Mother', value:'mother'},{name:'Father', value:'father'},{name:'Son', value:'son'},{name:'Daughter',value:'daughter'}]}
              onChange={this.props.handleInputChange}
              />
          </Col>
          <Col md={6}>
            <FieldGroup
              id="familyMemberContactAddress"
              type="select"
              label="Does this family member have the same address as the patient?"
              value={this.props.familyMemberContactAddress}
              options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
              onChange={this.props.handleInputChange}
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
              onChange={this.props.handleInputChange}
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
              onChange={this.props.handleInputChange}
              />
          </Col>
        </Row>
        <Row>
          <Col md={5} mdOffset={2}>
            <FieldGroup
              id="city"
              type="text"
              label="City"
              value={this.props.familyMemberCity}
              onChange={this.props.handleInputChange}
            />
            </Col>
          <Col md={3}>
            <FieldGroup
              id="state"
              type="select"
              label="State"
              value={this.props.familyMemberState}
              options={union([{name:'Select', value:''}],states)}
              onChange={this.props.handleInputChange}
            />
          </Col>
          <Col md={2}>
            <FieldGroup
              id="zip"
              type="text"
              label="Zip"
              value={this.props.familyMemberZip}
              onChange={this.props.handleInputChange}
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
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange}
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
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="rideHomeLastName"
                type="text"
                label="Last Name"
                value={this.props.rideHomeLastName}
                onChange={this.props.handleInputChange}
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
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="rideHomeOtherPhone"
                type="text"
                label="Other Phone"
                value={this.props.rideHomeOtherPhone}
                onChange={this.props.handleInputChange}
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
                options={[{name:'Select', value:''},{name:'Mother', value:'mother'},{name:'Father', value:'father'},{name:'Son', value:'son'},{name:'Daughter',value:'daughter'},{name:'Other', value:'other'}]}
                onChange={this.props.handleInputChange}
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
        <Grid>
          {this.getContactPreferences()}
          {this.getFamilyContact()}
          {this.getRideHomeInformation()}
          <Row>
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
    validation: state.registration.validation['3']
  }), {

  }
)(PageThree)