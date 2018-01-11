import React, {
  Component
} from 'react'
import {
  Grid,
  Row,
  Col,
  Panel,
  Button,
  FormGroup,
  Checkbox
} from 'react-bootstrap'
import FieldGroup from '../forms/field-group'
import {
  connect
} from 'react-redux'
import store, {
  history
} from '../../store';


class PageTwo extends Component {

  constructor() {
    super();
    store.subscribe(() => {
      //this.refs.institutionName.props.disabled = null;
      console.log('Here!');
    });
  }

  handleSubmit = (evt) => {
    this.props.goToPage(3);
  }

  handleCorrectFacility = (evt) => {
    console.log('Test');
    this.props.handleInputChange(evt);
    // if (evt.target.checked) {
    //   this.refs.institutionName.disabled = false;
    // } else {
    //   this.refs.institutionName.disabled = true;
    // }
  }

  getMedicalFacility() {
    return (
      <Panel>
        <Panel.Heading>Validate Medical Facility</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="institutionName"
                type="text"
                label="Institution Name"
                defaultValue={this.props.institutionName}
                onChange={this.props.handleInputChange}
                disabled
                ref="institutionName"
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="institutionAddress"
                type="text"
                label="Institution Address"
                defaultValue={this.props.institutionAddress}
                onChange={this.props.handleInputChange}
                disabled
                ref="institutionAddress"
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <Checkbox id="correctFacility" onChange={this.handleCorrectFacility} inline>Correct Facility?</Checkbox>
              </FormGroup>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getDisclosuresPolicies() {
    return (
      <Panel>
        <Panel.Heading>Disclosures and Policies</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body>
      </Panel>
    )
  }

  getDoctorAndVisit() {
    return (
      <Panel>
        <Panel.Heading>Doctor & Visit Details</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body> 
      </Panel>
    )
  }

  getContactPreferences() {
    return (
      <Panel>
        <Panel.Heading>Contact Preferences</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body>
      </Panel>
    )
  }

  getFamilyContact() {
    return (
      <Panel>
        <Panel.Heading>Family Contact</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body>
      </Panel>
    )
  }

  getInsuranceInformation() {
    return (
      <Panel>
        <Panel.Heading>Insurance Information</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body>
      </Panel>
    )
  }

  getMedicalFacilityInformation() {
    return (
      <Panel>
        <Panel.Heading>Medical Facility Information</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body>
      </Panel>
    )
  }

  getPreferencesAdditionalInformation() {
    return (
      <Panel>
        <Panel.Heading>Preferences and Additional Information</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body>
      </Panel>
    )
  }

  getEmergencyContactInformation() {
    return (
      <Panel>
        <Panel.Heading>Emergency Contact Information</Panel.Heading>
        <Panel.Body>
          TBD
        </Panel.Body>
      </Panel>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          {this.getMedicalFacility()}
          {this.getDisclosuresPolicies()}
          {this.getContactPreferences()}
          {this.getFamilyContact()}
          {this.getInsuranceInformation()}
          {this.getMedicalFacilityInformation()}
          {this.getPreferencesAdditionalInformation()}
          {this.getEmergencyContactInformation()}
          <Row>
            <Col xs={12}>
              <Button type="submit">
                Submit
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
    institutionName: state.registration.institutionName,
    institutionAddress: state.registration.institutionAddress
  }), {

  }
)(PageTwo)