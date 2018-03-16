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

  displayChecked = (val) => {
    return val ? 'Checked' : 'Not Checked'
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
        {this.getRowEntry('Height?', (this.props.registration.heightFeet.value || '0') + ' ft, ' + (this.props.registration.heightInches.value || '0') + ' in')}
        {this.getRowEntry('Weight? (lbs)', (this.props.registration.weight.value || '0') + ' lbs')}
        {this.getRowEntry('Physical activity level?', getListValue(activity, this.props.registration.physicalActivity.value))}
        {this.getRowEntry('Sex?', getListValue(gender, this.props.registration.sex.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getSleepInformation() {
    return (
      <Panel>
      <Panel.Heading>Sleep Information</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Do you SNORE loudly (louder than talking or heard through closed doors)?', getListValue(yesNo, this.props.registration.snoreLoudly.value))}
        {this.getRowEntry('Do you often feel TIRED, fatigued, or sleepy during daytime?', getListValue(yesNo, this.props.registration.feelTired.value))}
        {this.getRowEntry('Has anyone OBSERVED you stop breathing during your sleep?', getListValue(yesNo, this.props.registration.observedStopBreathing.value))}
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
        {this.getRowEntry('Was it hard for them to get the breathing tube in place?', getListValue(yesNo, this.props.registration.breathingTube.value))}
        {this.getRowEntry('Was it hard for you to wake up?', getListValue(yesNo, this.props.registration.wakeUp.value))}
        {this.getRowEntry('Did you have an allergic reaction to the anesthesia drugs?', getListValue(yesNo, this.props.registration.allergicReaction.value))}
        {this.getRowEntry('Did you have a high fever because of the anesthesia drugs (malignant hyperthermia)?', getListValue(yesNo, this.props.registration.highFever.value))}
        {this.getRowEntry('Have any close family members had trouble with anesthesia?', getListValue(yesNo, this.props.registration.familyComplications.value))}
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

  getSubstanceUse() {
    return (
      <Panel>
      <Panel.Heading>Alcohol, Smoking and Drug Use</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Smoking status?', getListValue(smokerList, this.props.registration.cigaretteSmoker.value))}
        {this.getRowEntry('Cigar smoker, pipe smoker, and/or tobacco chewer?', getListValue(yesNo, this.props.registration.cigarSmoker.value))}
        {this.getRowEntry('Do you drink alcohol daily?', getListValue(yesNo, this.props.registration.drinkDaily.value))}
        {this.getRowEntry('Do you drink alcohol heavily?', getListValue(yesNo, this.props.registration.drinkHeavy.value))}
        {this.getRowEntry('Do you take narcotic medications not prescribed for you?', getListValue(yesNo, this.props.registration.narcoticMeds.value))}
        {this.getRowEntry('Do you take street (illicit) drugs?', getListValue(yesNo, this.props.registration.illegalDrugs.value))}
        {this.getRowEntry('Have you ever felt that you should cut down on your drinking or drug use?', getListValue(yesNo, this.props.registration.substanceAbuse.value))}
        {this.getRowEntry('Are you angry or annoyed when others criticize your drinking or drug use?', getListValue(yesNo, this.props.registration.substanceUseCriticism.value))}
        {this.getRowEntry('Have you ever felt bad or guilty about your drinking or drug use?', getListValue(yesNo, this.props.registration.substanceUseGuilt.value))}
        {this.getRowEntry('Have you had a drink or used drugs the first thing in the morning as an eyeopener?', getListValue(yesNo, this.props.registration.substanceDependence.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getHeartDisease() {
    return (
      <Panel>
      <Panel.Heading>Heart or Blood Vessel Disease</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Too much fluid in your lungs (congestive heart failure)?', getListValue(yesNo, this.props.registration.heartFailure.value))}
        {this.getRowEntry('Heart attack (myocardial infarction)?', getListValue(yesNo, this.props.registration.heartAttack.value))}
        {this.getRowEntry('If you did have a heart attack, was it in the past 6 months?', getListValue(yesNo, this.props.registration.heartAttackTime.value))}
        {this.getRowEntry('Chest pain, shortness of breath while walking, or irregular, slow, or fast heart beat?', getListValue(yesNo, this.props.registration.chestPain.value))}
        {this.getRowEntry('Heart murmur or heart valve problem (aortic stenosis, mitral valve prolapse, etc.)?', getListValue(yesNo, this.props.registration.heartMurmer.value))}
        {this.getRowEntry('Any implanted devices in your heart (cardiac stents, heart valves, pacemaker or defibrillator)?', getListValue(yesNo, this.props.registration.heartDevice.value))}
        {this.getRowEntry('Heart or blood vessel surgery (coronary artery bypass, valve replacement or carotid surgery)?', getListValue(yesNo, this.props.registration.heartSurgery.value))}
        {this.getRowEntry('High blood pressure in the lungs (pulmonary hypertension)?', getListValue(yesNo, this.props.registration.pulmonaryHypertension.value))}
        {this.getRowEntry('Blood clots in legs or lungs (deep vein thrombosis, pulmonary embolus)?', getListValue(yesNo, this.props.registration.bloodClot.value))}
        {this.getRowEntry('Uncontrolled high blood pressure greater than 160/100 (160 over 100)', getListValue(yesNo, this.props.registration.highBloodPressure.value))}
        {this.getRowEntry('Aspirin?', this.displayChecked(this.props.registration.aspirin.value))}
        {this.getRowEntry('Coumadin (warfarin)?', this.displayChecked(this.props.registration.coumadin.value))}
        {this.getRowEntry('Plavix (clopidogrel)?', this.displayChecked(this.props.registration.plavix.value))}
        {this.getRowEntry('Effient (prasugrel)?', this.displayChecked(this.props.registration.effient.value))}
        {this.getRowEntry('Pradaxa (dabigatran)?', this.displayChecked(this.props.registration.pradaxa.value))}
        {this.getRowEntry('Xarelto (rivaroxaban)?', this.displayChecked(this.props.registration.xarelto.value))}
        {this.getRowEntry('Eliquis (apixaban)?', this.displayChecked(this.props.registration.eliquis.value))}
        {this.getRowEntry('Other?', this.props.registration.otherThinner.value)}
        {this.getRowEntry('Have you seen a heart doctor (cardiologist) within the last year?', getListValue(yesNo, this.props.registration.heartDoctor.value))}
        {this.getRowEntry('Are you unable to walk up 2 flights of stairs or walk 4-6 blocks without stopping? (Do not answer “yes” if the only reason that you are unable to do this is because of an orthopedic condition)', getListValue(yesNo, this.props.registration.stairs.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getLungDisease() {
    return (
      <Panel>
      <Panel.Heading>Lung Disease</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Do you have severe lung disease (COPD, pulmonary fibrosis, cystic fibrosis, or frequent asthma attacks)?', getListValue(yesNo, this.props.registration.lungDisease.value))}
        {this.getRowEntry('Do you use oxygen at home during the day or at night?', getListValue(yesNo, this.props.registration.oxygen.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getDiabetes() {
    return (
      <Panel>
      <Panel.Heading>Diabetes</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Do you have Diabetes (Type I or Type II) that is difficult to control?', getListValue(yesNo, this.props.registration.diabetes.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getKidneyDisease() {
    return (
      <Panel>
      <Panel.Heading>Kidney Disease</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Do you receive dialysis for kidney disease?', getListValue(yesNo, this.props.registration.dialysis.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getLiverDisease() {
    return (
      <Panel>
      <Panel.Heading>Liver Disease</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Do you have chronic hepatitis, cirrhosis or liver failure?', getListValue(yesNo, this.props.registration.liverFailure.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getNervousSystem() {
    return (
      <Panel>
      <Panel.Heading>Nervous System</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Have you had a stroke, transient ischemic attack (TIA), brain aneurysm, Alzheimer’s or dementia, seizures, multiple sclerosis, or brain tumor?', getListValue(yesNo, this.props.registration.stroke.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getMuscleDisorders() {
    return (
      <Panel>
      <Panel.Heading>Muscle Disorders</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Do you have myasthenia gravis or muscular dystrophy?', getListValue(yesNo, this.props.registration.muscularDystrophy.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getBloodDisorders() {
    return (
      <Panel>
      <Panel.Heading>Bleeding or Blood Disorders</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Do you have hemophilia, sickle cell, or blood cancer?', getListValue(yesNo, this.props.registration.hemophilia.value))}
        {this.getRowEntry('Do you bleed easily when cut or scraped?', getListValue(yesNo, this.props.registration.bleedEasy.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getOrganTransplant() {
    return (
      <Panel>
      <Panel.Heading>Organ Transplant</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Have you had an organ transplant?', getListValue(yesNo, this.props.registration.organTransplant.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getPregnant() {
    return (
      <Panel>
      <Panel.Heading>Pregnant</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('Are you pregnant or do you think you could be pregnant?', getListValue(yesNo, this.props.registration.pregnant.value))}
      </Panel.Body>
    </Panel>
    )
  }

  getChronicPain() {
    return (
      <Panel>
      <Panel.Heading>Chronic Pain</Panel.Heading>
      <Panel.Body>
        {this.getRowEntry('OxyContin (oxycodone)?', this.displayChecked(this.props.registration.oxycodone.value))}
        {this.getRowEntry('Methadone', this.displayChecked(this.props.registration.methadone.value))}
        {this.getRowEntry('Suboxone (buprenorphine)?', this.displayChecked(this.props.registration.suboxone.value))}
        {this.getRowEntry('Other long-acting opioids?', this.props.registration.otherOpioid.value)}
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
          {this.getSleepInformation()}
          {this.getAnesthesia()}
          {this.getDiagnostic()}
          {this.getSubstanceUse()}
          {this.getHeartDisease()}
          {this.getLungDisease()}
          {this.getDiabetes()}
          {this.getKidneyDisease()}
          {this.getLiverDisease()}
          {this.getNervousSystem()}
          {this.getMuscleDisorders()}
          {this.getBloodDisorders()}
          {this.getOrganTransplant()}
          {this.getPregnant()}
          {this.getChronicPain()}
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