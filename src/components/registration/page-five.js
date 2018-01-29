import React, {
  Component
} from 'react';
import {
  Grid,
  Row,
  Col,
  Panel,
  Button,
  Alert
} from 'react-bootstrap';
import {
  connect
} from 'react-redux';
import {
  save
} from '../../actions/registration'
import {
  getListValue,
  states,
  procedureSites,
  docs,
  yesNo,
  gender,
  insuranceTypes,
  phoneTypes,
  relationships,
  smokerList,
  activity,
  neckCircumference
} from '../forms/lists';
import moment from 'moment-es6';


class PageFive extends Component {

  handleSubmit = (evt) => {
    //Since we are just finalizing, there are no changes.  We are just passing the finalize param
    save(this.props.emailToken, this.props.original, {}, true)
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
        {this.getRowEntry('Name of Surgeon', getListValue(docs, this.props.registration.docPerforming.value))}
        {this.getRowEntry('Procedure to Perform', this.props.registration.procedurePerformed.value)}
        {this.getRowEntry('Procedure Site', getListValue(procedureSites, this.props.registration.procedureSite.value))}
        {this.getRowEntry('Procedure Date', (this.props.registration.procedureDate.value || this.props.registration.procedureDate.value === '') ? moment(this.props.registration.procedureDate.value).format("M/D/YYYY") : '')}
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
        {this.getRowEntry('State', getListValue(states, this.props.registration.institutionState.value))}
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
        {this.getRowEntry('Date of Birth', moment(this.props.registration.dateOfBirth.value).format('M/D/YYYY'))}
        {this.getRowEntry('Gender', getListValue(gender, this.props.registration.sex.value))}
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
        {this.getRowEntry('State', getListValue(states, this.props.registration.state.value))}
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
        {this.getRowEntry('Primary Insurance', getListValue(insuranceTypes, this.props.registration.primaryInsuranceType.value))}
        {this.getRowEntry('Secondary Insurance', getListValue(yesNo, this.props.registration.secondaryInsurance.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getContactPreferences() {
    return (
      <Panel>
      <Panel.Heading>Contact Preferences</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Weekday contact phone number', getListValue(phoneTypes, this.props.registration.weekdayPhoneNumber.value))}
        {this.getRowEntry('Voicemail contact phone number', getListValue(phoneTypes, this.props.registration.voiceMailNumber.value))}
        {this.getRowEntry('Can we send text messages', getListValue(yesNo, this.props.registration.textMessageApproval.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getFamilyContact() {
    return (
      <Panel>
      <Panel.Heading>Family Contact</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('First Name', this.props.registration.familyMemberFirstName.value)}
        {this.getRowEntry('Last Name', this.props.registration.familyMemberLastName.value)}
        {this.getRowEntry('Relationship', getListValue(relationships, this.props.registration.familyMemberRelationship.value))}
        {this.getRowEntry('Address Line One', this.props.registration.familyMemberAddressOne.value)}
        {this.getRowEntry('Address Line Two', this.props.registration.familyMemberAddressTwo.value)}
        {this.getRowEntry('City', this.props.registration.familyMemberCity.value)}
        {this.getRowEntry('State', getListValue(states, this.props.registration.familyMemberState.value))}
        {this.getRowEntry('Zip', this.props.registration.familyMemberZip.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getRideHome() {
    return (
      <Panel>
      <Panel.Heading>Ride Home Information</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('First Name', this.props.registration.rideHomeFirstName.value)}  
        {this.getRowEntry('Last Name', this.props.registration.rideHomeLastName.value)}
        {this.getRowEntry('Primary Phone', this.props.registration.rideHomePrimaryPhone.value)}
        {this.getRowEntry('Other Phone', this.props.registration.rideHomeOtherPhone.value)}
        {this.getRowEntry('Relationship', getListValue(relationships, this.props.registration.rideHomeRelationship.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getBasicScreening() {
    return (
      <Panel>
      <Panel.Heading>Basic Screening</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Height? (ft, in)', this.props.registration.heightFeet.value + this.props.registration.heightInches.value)}
        {this.getRowEntry('Weight? (lbs)', this.props.registration.weight.value)}
        {this.getRowEntry('Smoking status?', getListValue(smokerList, this.props.registration.cigaretteSmoker.value))}
        {this.getRowEntry('Cigar smoker, pipe smoker, and/or tobacco chewer?', getListValue(yesNo, this.props.registration.cigarSmoker.value))}
        {this.getRowEntry('Drink beer, wine or liquor?', getListValue(yesNo, this.props.registration.drink.value))}
        {this.getRowEntry('History of alcohol abuse?', getListValue(yesNo, this.props.registration.alcoholAbuse.value))}
        {this.getRowEntry('History of using recreational or street drugs?', getListValue(yesNo, this.props.registration.drugs.value))}
        {this.getRowEntry('Physicial activity level?', getListValue(activity, this.props.registration.physicalActivity.value))}
        {this.getRowEntry('Do you SNORE loudly (louder than talking or heard through closed doors)?', getListValue(yesNo, this.props.registration.snoreLoudly.value))}
        {this.getRowEntry('Do you often feel TIRED, fatigued, or sleepy during daytime?', getListValue(yesNo, this.props.registration.feelTired.value))}
        {this.getRowEntry('Has anyone OBSERVED you stop breathing during your sleep?', getListValue(yesNo, this.props.registration.observedStopBreathing.value))}
        {this.getRowEntry('Do you have or are you being treated for high blood PRESSURE?', getListValue(yesNo, this.props.registration.highBloodPressure.value))}
        {this.getRowEntry('What is your neck circumference? (in inches)', getListValue(neckCircumference, this.props.registration.neckCircumference.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getAnesthesia() {
    return (
      <Panel>
      <Panel.Heading>History of Anesthesia Complications</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('History of malignant hypertermia?', getListValue(yesNo, this.props.registration.malignantHypertermia.value))}
        {this.getRowEntry('History of pseudocholinesterase deficiency?', getListValue(yesNo, this.props.registration.pseudocholinesteraseDeficiency.value))}
        {this.getRowEntry('Motion sickness?', getListValue(yesNo, this.props.registration.motionSickness.value))}
        {this.getRowEntry('Postoperative nausea and vomiting?', getListValue(yesNo, this.props.registration.nauseaVomiting.value))}
        {this.getRowEntry('Other serious adverse reactions to anesthesia medications?', this.props.registration.adverseReaction.value)}
      </Panel.Body>
    </Panel>
    )
  }

  getDiagnostic() {
    return (
      <Panel>
      <Panel.Heading>Recent or Planned Diagnostic Testing</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('EKG?', getListValue(yesNo, this.props.registration.ekg.value))}
        {this.getRowEntry('Chest XRAY?', getListValue(yesNo, this.props.registration.chestXray.value))}
        {this.getRowEntry('Sleep Apnea Study?', getListValue(yesNo, this.props.registration.sleepApnea.value))}
        {this.getRowEntry('Cardiac (Heart) Stress Test?', getListValue(yesNo, this.props.registration.cardiacStress.value))}
        {this.getRowEntry('Cardiac (Heart) Echo (Ultrasound)?', getListValue(yesNo, this.props.registration.cardiacEcho.value))}
        {this.getRowEntry('Cardiac Catheterization?', getListValue(yesNo, this.props.registration.cardiacCatheterization.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getValidationAlert(isInvalid) {
    if (isInvalid) {
      return (
        <Alert bsStyle="danger">
          Please validate all data on {isInvalid} before continuing.
        </Alert>
      )
    }
  }

  getButton(isInvalid) {
    if (isInvalid) {
      return (
        <Button disabled bsStyle="primary" type="submit">
          Submit
        </Button>)
    } else {
      return (
        <Button bsStyle="primary" type="submit">
          Submit
        </Button>)
    }
  }

  render() {
    var isInvalid = null;
    if (!this.props.registration.validation[4]) {
      isInvalid = "the health history page / page 4";
    }
    if (!this.props.registration.validation[3]) {
      isInvalid = "the contact preferences page / page 3";
    }
    if (!this.props.registration.validation[2]) {
      isInvalid = "the contact information page / page 2";
    }
    if (!this.props.registration.validation[1]) {
      isInvalid = "the procedure page / page 1";
    }


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
          {this.getValidationAlert(isInvalid)}
          <Row className="last-row">
            <Col xs={12}>
              {this.getButton(isInvalid)}
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
}

export default connect(
  (state) => ({
    registration: state.registration,

    original: state.registration.original,

    emailToken: state.authentication.emailToken
  }), {

  }
)(PageFive)