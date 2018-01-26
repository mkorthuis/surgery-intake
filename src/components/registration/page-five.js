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
import {
  connect
} from 'react-redux'

class PageFive extends Component {

  handleSubmit = (evt) => {
    this.props.goToPage(6);
  }

  getRowEntry = (name, value) => {
    return (
      <Row>
        <Col xs={12}>
          <b>{name}:</b> {value}
        </Col>
      </Row>
    )
  }

  getReview() {
    return (
      <Panel>
      <Panel.Heading>Review Information</Panel.Heading>
      <Panel.Body>
      Please review the information below.  If it is correct, please send.
      </Panel.Body>
    </Panel>
    )
  }

  getProcedureInformation() {
    return (
      <Panel>
      <Panel.Heading>Procedure Information</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Name of Surgeon', this.props.registration.docPerforming.value)}
        {this.getRowEntry('Procedure to Perform', this.props.registration.procedurePerformed.value)}
        {this.getRowEntry('Procedure Site', this.props.registration.procedureSite.value)}
        {this.getRowEntry('Procedure Date', this.props.registration.procedureDate.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getMedicalFacility() {
    return (
      <Panel>
      <Panel.Heading>Medical Facility</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Name', this.props.registration.institutionName.value)}
        {this.getRowEntry('Address Line One', this.props.registration.institutionAddressOne.value)}
        {this.getRowEntry('Address Line Two', this.props.registration.institutionAddressTwo.value)}
        {this.getRowEntry('City', this.props.registration.institutionCity.value)}
        {this.getRowEntry('State', this.props.registration.institutionState.value)}
        {this.getRowEntry('Zip', this.props.registration.institutionZip.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getPatientInformation() {
    return (
      <Panel>
      <Panel.Heading>Patient Information</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('First Name', this.props.registration.firstName.value)}
        {this.getRowEntry('Middle Name', this.props.registration.middleName.value)}
        {this.getRowEntry('Last Name', this.props.registration.lastName.value)}
        {this.getRowEntry('Preferred Name', this.props.registration.preferredName.value)}
        {this.getRowEntry('Date of Birth', this.props.registration.dateOfBirth.value)}
        {this.getRowEntry('Gender', this.props.registration.sex.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getContactNumbers() {
    return (
      <Panel>
      <Panel.Heading>Contact Numbers</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Mobile Phone', this.props.registration.mobilePhone.value)}
        {this.getRowEntry('Home Phone', this.props.registration.homePhone.value)}
        {this.getRowEntry('Email Address', this.props.registration.emailAddress.value)}
        {this.getRowEntry('Work Phone', this.props.registration.workPhone.value)}
        {this.getRowEntry('Extension', this.props.registration.workPhoneExtension.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getPatientAddress() {
    return (
      <Panel>
      <Panel.Heading>Patient Address</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Address Line One', this.props.registration.addressOne.value)}
        {this.getRowEntry('Address Line Two', this.props.registration.addressTwo.value)}
        {this.getRowEntry('City', this.props.registration.city.value)}
        {this.getRowEntry('State', this.props.registration.state.value)}
        {this.getRowEntry('Zip', this.props.registration.zip.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getInsuranceInformation() {
    return (
      <Panel>
      <Panel.Heading>Insurance Information</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Primary Insurance', this.props.registration.primaryInsuranceType.value)}
        {this.getRowEntry('Secondary Insurance', this.props.registration.secondaryInsurance.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getContactPreferences() {
    return (
      <Panel>
      <Panel.Heading>Contact Preferences</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Weekday contact phone number', this.props.registration.weekdayPhoneNumber.value)}
        {this.getRowEntry('Voicemail contact phone number', this.props.registration.voiceMailNumber.value)}
        {this.getRowEntry('Can we send text messages', this.props.registration.textMessageApproval.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getFamilyContact() {
    return (
      <Panel>
      <Panel.Heading>Family Contact</Panel.Heading>
      <Panel.Body>
      </Panel.Body>
    </Panel>
    )
  }

  getRideHome() {
    return (
      <Panel>
      <Panel.Heading>Ride Home Information</Panel.Heading>
      <Panel.Body>
      </Panel.Body>
    </Panel>
    )
  }

  getBasicScreening() {
    return (
      <Panel>
      <Panel.Heading>Basic Screening</Panel.Heading>
      <Panel.Body>
      </Panel.Body>
    </Panel>
    )
  }

  getAnesthesia() {
    return (
      <Panel>
      <Panel.Heading>History of Anesthesia Complications</Panel.Heading>
      <Panel.Body>
      </Panel.Body>
    </Panel>
    )
  }

  getDiagnostic() {
    return (
      <Panel>
      <Panel.Heading>Recent or Planned Diagnostic Testing</Panel.Heading>
      <Panel.Body>
      </Panel.Body>
    </Panel>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid className="main-grid">
          {this.getReview()}
          {this.getProcedureInformation()}
          {this.getMedicalFacility()}
          {this.getPatientInformation()}
          {this.getContactNumbers()}
          {this.getPatientAddress()}
          {this.getInsuranceInformation()}
          {this.getContactPreferences()}
          {this.getFamilyContact()}
          {this.getRideHome()}
          {this.getBasicScreening()}
          {this.getAnesthesia()}
          {this.getDiagnostic()}
          <Row className="last-row">
            <Col xs={12}>
              <Button bsStyle="primary" type="submit">
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
    registration: state.registration
  }), {

  }
)(PageFive)