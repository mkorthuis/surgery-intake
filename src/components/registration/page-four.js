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

class PageFour extends Component {

  handleSubmit = (evt) => {
    this.props.goToPage(5);
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

  getPatientInformation() {
    return (
      <Panel>
        <Panel.Heading>Review Information</Panel.Heading>
        <Panel.Body>
          {this.getRowEntry('First Name', this.props.firstName.value)}
          {this.getRowEntry('Middle Initial', this.props.middleInitial.value)}
          {this.getRowEntry('Last Name', this.props.lastName.value)}
          {this.getRowEntry('Preferred Name', this.props.preferredName.value)}
          {this.getRowEntry('Date of Birth', this.props.dateOfBirth.value)}
          {this.getRowEntry('Sex', this.props.sex.value)}
          {this.getRowEntry('Address One', this.props.addressOne.value)}
          {this.getRowEntry('Address Two', this.props.addressTwo.value)}
          {this.getRowEntry('City', this.props.city.value)}
          {this.getRowEntry('State', this.props.state.value)}
          {this.getRowEntry('Mobile Phone', this.props.mobilePhone.value)}
          {this.getRowEntry('Home Phone', this.props.homePhone.value)}
          {this.getRowEntry('Work Phone', this.props.workPhone.value)}
          {this.getRowEntry('Work Phone Extension', this.props.workPhoneExtension.value)}
          
          {this.getRowEntry('Institution Name', this.props.institutionName.value)}
          {this.getRowEntry('Institution Address One', this.props.institutionAddressOne.value)}
          {this.getRowEntry('Institution Address Two', this.props.institutionAddressTwo.value)}
          {this.getRowEntry('Institution City', this.props.institutionCity.value)}
          {this.getRowEntry('Institution State', this.props.institutionState.value)}
          {this.getRowEntry('Institution Zip', this.props.institutionZip.value)}
          {this.getRowEntry('Correct Facility', this.props.correctFacility.value)}
          {this.getRowEntry('I understand and accept the Notice of Patients.', this.props.understandPatientNotice.value)}
          {this.getRowEntry('I understand and accept the Acknowledgement of Ownership.', this.props.ackOwnership.value)}
          {this.getRowEntry('Who is performing the procedure, surgery or consult?', this.props.docPerforming.value)}
          {this.getRowEntry('Procedure Site', this.props.procedureSite.value)}
          {this.getRowEntry('Type of Procedure, Surgery, or Consult', this.props.procedureSurgeryConsultType.value)}
          {this.getRowEntry('Reason for Procedure, Surgery, or Consult', this.props.procedureSurgeryConsultReason.value)}
          {this.getRowEntry('Choose a weekday phone number', this.props.weekdayPhoneNumber.value)}
          {this.getRowEntry('Choose the number where the healthcare team can leave a voice message', this.props.voiceMailNumber.value)}
          {this.getRowEntry('Can the healthcare team send you a text message with healthcare information?', this.props.textMessageApproval.value)}
          {this.getRowEntry('In case of an emergency, is there a family member we should contact?', this.props.familyMemberContact.value)}
          {this.getRowEntry('Family Member Relationship to the Patient',this.props.familyMemberRelationship.value)}
          {this.getRowEntry('Family Member First Name', this.props.familyMemberFirstName.value)}
          {this.getRowEntry('Family Member Last Name', this.props.familyMemberLastName.value)}
          {this.getRowEntry('Does this family member have the same address as the patient?', this.props.familyMemberContactAddress.value)}
          {this.getRowEntry('Primay Insurance',this.props.primaryInsuranceType.value)}
          {this.getRowEntry('Secondary Insurance', this.props.secondaryInsurance.value)}
        </Panel.Body>
      </Panel>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          {this.getPatientInformation()}
          <Row>
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
    firstName: state.registration.firstName,
    middleInitial: state.registration.middleInitial,
    lastName: state.registration.lastName,
    preferredName: state.registration.preferredName,
    dateOfBirth: state.registration.dateOfBirth,
    sex: state.registration.sex,
    addressOne: state.registration.addressOne,
    addressTwo: state.registration.addressTwo,
    city: state.registration.city,
    state: state.registration.state,
    mobilePhone: state.registration.mobilePhone,
    homePhone: state.registration.homePhone,
    workPhone: state.registration.workPhone,
    workPhoneExtension: state.registration.workPhoneExtension,

    institutionName: state.registration.institutionName,
    institutionAddressOne: state.registration.institutionAddressOne,
    institutionAddressTwo: state.registration.institutionAddressTwo,
    institutionCity: state.registration.institutionCity,
    institutionState: state.registration.institutionState,
    institutionZip: state.registration.institutionZip,
    correctFacility: state.registration.correctFacility,
    understandPatientNotice: state.registration.understandPatientNotice,
    ackOwnership: state.registration.ackOwnership,
    docPerforming: state.registration.docPerforming,
    procedureSite: state.registration.procedureSite,
    procedureSurgeryConsultType: state.registration.procedureSurgeryConsultType,
    procedureSurgeryConsultReason: state.registration.procedureSurgeryConsultReason,
    weekdayPhoneNumber: state.registration.weekdayPhoneNumber,
    voiceMailNumber: state.registration.voiceMailNumber,
    textMessageApproval: state.registration.textMessageApproval,
    familyMemberContact: state.registration.familyMemberContact,
    familyMemberRelationship: state.registration.familyMemberRelationship,
    familyMemberFirstName: state.registration.familyMemberFirstName,
    familyMemberLastName: state.registration.familyMemberLastName,
    familyMemberContactAddress: state.registration.familyMemberContactAddress,
    primaryInsuranceType: state.registration.primaryInsuranceType,
    secondaryInsurance: state.registration.secondaryInsurance
  }), {

  }
)(PageFour)