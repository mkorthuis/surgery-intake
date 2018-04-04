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


  displayChecked = (val) => {
    return val ? 'Checked' : 'Not Checked'
  }

  pageInformation = [{
    title: 'Procedure Information',
    rows: [{
      name: 'Name of Surgeon',
      value: getListValue(docs, this.props.registration.docPerforming.value)
    }, {
      name: 'Procedure to Perform',
      value: this.props.registration.procedurePerformed.value
    }, {
      name: 'Procedure Site',
      value: getListValue(procedureSites, this.props.registration.procedureSite.value)
    }, {
      name: 'Procedure Date',
      value: (this.props.registration.procedureDate.value || this.props.registration.procedureDate.value === '') ? moment(this.props.registration.procedureDate.value).format("M/D/YYYY") : ''
    }]
  }, {
    title: 'Medical Facility',
    rows: [{
      name: 'Name',
      value: this.props.registration.institutionName.value
    }, {
      name: 'Address Line One',
      value: this.props.registration.institutionAddressOne.value
    }, {
      name: 'Address Line Two',
      value: this.props.registration.institutionAddressTwo.value
    }, {
      name: 'City',
      value: this.props.registration.institutionCity.value
    }, {
      name: 'State',
      value: getListValue(states, this.props.registration.institutionState.value)
    }, {
      name: 'Zip',
      value: this.props.registration.institutionZip.value
    }]
  }, {
    title: 'Patient Information',
    rows: [{
      name: 'First Name',
      value: this.props.registration.firstName.value
    }, {
      name: 'Middle Name',
      value: this.props.registration.middleName.value
    }, {
      name: 'Last Name',
      value: this.props.registration.lastName.value
    }, {
      name: 'Preferred Name',
      value: this.props.registration.preferredName.value
    }, {
      name: 'Date of Birth',
      value: moment(this.props.registration.dateOfBirth.value).format('M/D/YYYY')
    }, {
      name: 'Gender',
      value: getListValue(gender, this.props.registration.sex.value)
    }]
  }, {
    title: 'Contact Numbers',
    rows: [{
      name: 'Mobile Phone',
      value: this.props.registration.mobilePhone.value
    }, {
      name: 'Home Phone',
      value: this.props.registration.homePhone.value
    }, {
      name: 'Email Address',
      value: this.props.registration.emailAddress.value
    }, {
      name: 'Work Phone',
      value: this.props.registration.workPhone.value
    }, {
      name: 'Extension',
      value: this.props.registration.workPhoneExtension.value
    }]
  }, {
    title: 'Patient Address',
    rows: [{
      name: 'Address Line One',
      value: this.props.registration.addressOne.value
    }, {
      name: 'Address Line Two',
      value: this.props.registration.addressTwo.value
    }, {
      name: 'City',
      value: this.props.registration.city.value
    }, {
      name: 'State',
      value: getListValue(states, this.props.registration.state.value)
    }, {
      name: 'Zip',
      value: this.props.registration.zip.value
    }]
  }, {
    title: 'Insurance Information',
    rows: [{
      name: 'Primary Insurance',
      value: getListValue(insuranceTypes, this.props.registration.primaryInsuranceType.value)
    }, {
      name: 'Secondary Insurance',
      value: getListValue(yesNo, this.props.registration.secondaryInsurance.value)
    }]
  }, {
    title: 'Contact Preferences',
    rows: [{
      name: 'Weekday contact phone number',
      value: getListValue(phoneTypes, this.props.registration.weekdayPhoneNumber.value)
    }, {
      name: 'Voicemail contact phone number',
      value: getListValue(phoneTypes, this.props.registration.voiceMailNumber.value)
    }, {
      name: 'Can we send text messages',
      value: getListValue(yesNo, this.props.registration.textMessageApproval.value)
    }]
  }, {
    title: 'Family Contact',
    rows: [{
      name: 'First Name',
      value: this.props.registration.familyMemberFirstName.value
    }, {
      name: 'Last Name',
      value: this.props.registration.familyMemberLastName.value
    }, {
      name: 'Relationship',
      value: getListValue(relationships, this.props.registration.familyMemberRelationship.value)
    }, {
      name: 'Address Line One',
      value: this.props.registration.familyMemberAddressOne.value
    }, {
      name: 'Address Line Two',
      value: this.props.registration.familyMemberAddressTwo.value
    }, {
      name: 'City',
      value: this.props.registration.familyMemberCity.value
    }, {
      name: 'State',
      value: getListValue(states, this.props.registration.familyMemberState.value)
    }, {
      name: 'Zip',
      value: this.props.registration.familyMemberZip.value
    }]
  }, {
    title: 'Ride Home Information',
    rows: [{
      name: 'First Name',
      value: this.props.registration.rideHomeFirstName.value
    }, {
      name: 'Last Name',
      value: this.props.registration.rideHomeLastName.value
    }, {
      name: 'Primary Phone',
      value: this.props.registration.rideHomePrimaryPhone.value
    }, {
      name: 'Other Phone',
      value: this.props.registration.rideHomeOtherPhone.value
    }, {
      name: 'Relationship',
      value: getListValue(relationships, this.props.registration.rideHomeRelationship.value)
    }]
  }, {
    title: 'Basic Screening',
    rows: [{
      name: 'Height?',
      value: (this.props.registration.heightFeet.value || '0') + ' ft, ' + (this.props.registration.heightInches.value || '0') + ' in'
    }, {
      name: 'Weight? (lbs)',
      value: (this.props.registration.weight.value || '0') + ' lbs'
    }, {
      name: 'Physical activity level?',
      value: getListValue(activity, this.props.registration.physicalActivity.value)
    }, {
      name: 'Sex?',
      value: getListValue(gender, this.props.registration.sex.value)
    }]
  }, {
    title: 'Sleep Information',
    rows: [{
      name: 'Do you SNORE loudly (louder than talking or heard through closed doors)?',
      value: getListValue(yesNo, this.props.registration.snoreLoudly.value)
    }, {
      name: 'Do you often feel TIRED, fatigued, or sleepy during daytime?',
      value: getListValue(yesNo, this.props.registration.feelTired.value)
    }, {
      name: 'Has anyone OBSERVED you stop breathing during your sleep?',
      value: getListValue(yesNo, this.props.registration.observedStopBreathing.value)
    }, {
      name: 'What is your neck circumference? (in inches)',
      value: getListValue(neckCircumference, this.props.registration.neckCircumference.value)
    }]
  }, {
    title: 'History of Anesthesia Complications',
    rows: [{
      name: 'History of malignant hypertermia?',
      value: getListValue(yesNo, this.props.registration.malignantHypertermia.value)
    }, {
      name: 'History of pseudocholinesterase deficiency?',
      value: getListValue(yesNo, this.props.registration.pseudocholinesteraseDeficiency.value)
    }, {
      name: 'Motion sickness?',
      value: getListValue(yesNo, this.props.registration.motionSickness.value)
    }, {
      name: 'Postoperative nausea and vomiting?',
      value: getListValue(yesNo, this.props.registration.nauseaVomiting.value)
    }, {
      name: 'Other serious adverse reactions to anesthesia medications?',
      value: this.props.registration.adverseReaction.value
    }, {
      name: 'Was it hard for them to get the breathing tube in place?',
      value: getListValue(yesNo, this.props.registration.breathingTube.value)
    }, {
      name: 'Was it hard for you to wake up?',
      value: getListValue(yesNo, this.props.registration.wakeUp.value)
    }, {
      name: 'Did you have an allergic reaction to the anesthesia drugs?',
      value: getListValue(yesNo, this.props.registration.allergicReaction.value)
    }, {
      name: 'Did you have a high fever because of the anesthesia drugs (malignant hyperthermia)?',
      value: getListValue(yesNo, this.props.registration.highFever.value)
    }, {
      name: 'Have any close family members had trouble with anesthesia?',
      value: getListValue(yesNo, this.props.registration.familyComplications.value)
    }]
  }, {
    title: 'Recent or Planned Diagnostic Testing',
    rows: [{
      name: 'EKG?',
      value: getListValue(yesNo, this.props.registration.ekg.value)
    }, {
      name: 'Chest XRAY?',
      value: getListValue(yesNo, this.props.registration.chestXray.value)
    }, {
      name: 'Sleep Apnea Study?',
      value: getListValue(yesNo, this.props.registration.sleepApnea.value)
    }, {
      name: 'Cardiac (Heart) Stress Test?',
      value: getListValue(yesNo, this.props.registration.cardiacStress.value)
    }, {
      name: 'Cardiac (Heart) Echo (Ultrasound)?',
      value: getListValue(yesNo, this.props.registration.cardiacEcho.value)
    }, {
      name: 'Cardiac Catheterization?',
      value: getListValue(yesNo, this.props.registration.cardiacCatheterization.value)
    }]
  }, {
    title: 'Alcohol, Smoking and Drug Use',
    rows: [{
      name: 'Smoking status?',
      value: getListValue(smokerList, this.props.registration.cigaretteSmoker.value)
    }, {
      name: 'Cigar smoker, pipe smoker, and/or tobacco chewer?',
      value: getListValue(yesNo, this.props.registration.cigarSmoker.value)
    }, {
      name: 'Do you drink alcohol daily?',
      value: getListValue(yesNo, this.props.registration.drinkDaily.value)
    }, {
      name: 'Do you drink alcohol heavily?',
      value: getListValue(yesNo, this.props.registration.drinkHeavy.value)
    }, {
      name: 'Do you take narcotic medications not prescribed for you?',
      value: getListValue(yesNo, this.props.registration.narcoticMeds.value)
    }, {
      name: 'Do you take street (illicit) drugs?',
      value: getListValue(yesNo, this.props.registration.illegalDrugs.value)
    }, {
      name: 'Have you ever felt that you should cut down on your drinking or drug use?',
      value: getListValue(yesNo, this.props.registration.substanceAbuse.value)
    }, {
      name: 'Are you angry or annoyed when others criticize your drinking or drug use?',
      value: getListValue(yesNo, this.props.registration.substanceUseCriticism.value)
    }, {
      name: 'Have you ever felt bad or guilty about your drinking or drug use?',
      value: getListValue(yesNo, this.props.registration.substanceUseGuilt.value)
    }, {
      name: 'Have you had a drink or used drugs the first thing in the morning as an eyeopener?',
      value: getListValue(yesNo, this.props.registration.substanceDependence.value)
    }]
  }, {
    title: 'Heart or Blood Vessel Disease',
    rows: [{
      name: 'Too much fluid in your lungs (congestive heart failure)?',
      value: getListValue(yesNo, this.props.registration.heartFailure.value)
    }, {
      name: 'Heart attack (myocardial infarction)?',
      value: getListValue(yesNo, this.props.registration.heartAttack.value)
    }, {
      name: 'If you did have a heart attack, was it in the past 6 months?',
      value: getListValue(yesNo, this.props.registration.heartAttackTime.value)
    }, {
      name: 'Chest pain, shortness of breath while walking, or irregular, slow, or fast heart beat?',
      value: getListValue(yesNo, this.props.registration.chestPain.value)
    }, {
      name: 'Heart murmur or heart valve problem (aortic stenosis, mitral valve prolapse, etc.)?',
      value: getListValue(yesNo, this.props.registration.heartMurmer.value)
    }, {
      name: 'Any implanted devices in your heart (cardiac stents, heart valves, pacemaker or defibrillator)?',
      value: getListValue(yesNo, this.props.registration.heartDevice.value)
    }, {
      name: 'Heart or blood vessel surgery (coronary artery bypass, valve replacement or carotid surgery)?',
      value: getListValue(yesNo, this.props.registration.heartSurgery.value)
    }, {
      name: 'High blood pressure in the lungs (pulmonary hypertension)?',
      value: getListValue(yesNo, this.props.registration.pulmonaryHypertension.value)
    }, {
      name: 'Blood clots in legs or lungs (deep vein thrombosis, pulmonary embolus)?',
      value: getListValue(yesNo, this.props.registration.bloodClot.value)
    }, {
      name: 'Uncontrolled high blood pressure greater than 160/100 (160 over 100)',
      value: getListValue(yesNo, this.props.registration.highBloodPressure.value)
    }, {
      name: 'Aspirin?',
      value: this.displayChecked(this.props.registration.aspirin.value)
    }, {
      name: 'Coumadin (warfarin)?',
      value: this.displayChecked(this.props.registration.coumadin.value)
    }, {
      name: 'Plavix (clopidogrel)?',
      value: this.displayChecked(this.props.registration.plavix.value)
    }, {
      name: 'Effient (prasugrel)?',
      value: this.displayChecked(this.props.registration.effient.value)
    }, {
      name: 'Pradaxa (dabigatran)?',
      value: this.displayChecked(this.props.registration.pradaxa.value)
    }, {
      name: 'Xarelto (rivaroxaban)?',
      value: this.displayChecked(this.props.registration.xarelto.value)
    }, {
      name: 'Eliquis (apixaban)?',
      value: this.displayChecked(this.props.registration.eliquis.value)
    }, {
      name: 'Other?',
      value: this.props.registration.otherThinner.value
    }, {
      name: 'Have you seen a heart doctor (cardiologist) within the last year?',
      value: getListValue(yesNo, this.props.registration.heartDoctor.value)
    }, {
      name: 'Are you unable to walk up 2 flights of stairs or walk 4-6 blocks without stopping? (Do not answer “yes” if the only reason that you are unable to do this is because of an orthopedic condition)',
      value: getListValue(yesNo, this.props.registration.stairs.value)
    }]
  }, {
    title: 'Lung Disease',
    rows: [{
      name: 'Do you have severe lung disease (COPD, pulmonary fibrosis, cystic fibrosis, or frequent asthma attacks)?',
      value: getListValue(yesNo, this.props.registration.lungDisease.value)
    }, {
      name: 'Do you use oxygen at home during the day or at night?',
      value: getListValue(yesNo, this.props.registration.oxygen.value)
    }]
  }, {
    title: 'Diabetes',
    rows: [{
      name: 'Do you have Diabetes (Type I or Type II) that is difficult to control?',
      value: getListValue(yesNo, this.props.registration.diabetes.value)
    }]
  }, {
    title: 'Kidney Disease',
    rows: [{
      name: 'Do you receive dialysis for kidney disease?',
      value: getListValue(yesNo, this.props.registration.dialysis.value)
    }]
  }, {
    title: 'Liver Disease',
    rows: [{
      name: 'Do you have chronic hepatitis, cirrhosis or liver failure?',
      value: getListValue(yesNo, this.props.registration.liverFailure.value)
    }]
  }, {
    title: 'Nervous System',
    rows: [{
      name: 'Have you had a stroke, transient ischemic attack (TIA), brain aneurysm, Alzheimer’s or dementia, seizures, multiple sclerosis, or brain tumor?',
      value: getListValue(yesNo, this.props.registration.stroke.value)
    }]
  }, {
    title: 'Muscle Disorders',
    rows: [{
      name: 'Do you have myasthenia gravis or muscular dystrophy?',
      value: getListValue(yesNo, this.props.registration.muscularDystrophy.value)
    }]
  }, {
    title: 'Bleeding or Blood Disorders',
    rows: [{
      name: 'Do you have hemophilia, sickle cell, or blood cancer?',
      value: getListValue(yesNo, this.props.registration.hemophilia.value)
    }, {
      name: 'Do you bleed easily when cut or scraped?',
      value: getListValue(yesNo, this.props.registration.bleedEasy.value)
    }]
  }, {
    title: 'Organ Transplant',
    rows: [{
      name: 'Have you had an organ transplant?',
      value: getListValue(yesNo, this.props.registration.organTransplant.value)
    }]
  }, {
    title: 'Pregnant',
    rows: [{
      name: 'Are you pregnant or do you think you could be pregnant?',
      value: getListValue(yesNo, this.props.registration.pregnant.value)
    }]
  }, {
    title: 'Chronic Pain',
    rows: [{
      name: 'OxyContin (oxycodone)?',
      value: this.displayChecked(this.props.registration.oxycodone.value)
    }, {
      name: 'Methadone',
      value: this.displayChecked(this.props.registration.methadone.value)
    }, {
      name: 'Suboxone (buprenorphine)?',
      value: this.displayChecked(this.props.registration.suboxone.value)
    }, {
      name: 'Other long-acting opioids?',
      value: this.props.registration.otherOpioid.value
    }]
  }]


  handleSubmit = (evt) => {
    //Since we are just finalizing, there are no changes, aside from the generated HTML.  We are just passing the finalize param
    var htmlText = "<html><head></head><body>" + this.pageInformation.map((section) => this.displayPrintSection(section)).join("") + "</body></html>";
    save(this.props.emailToken, this.props.original, {
      html: htmlText
    }, true)
    this.props.goToPage(6);
  }


  getRowEntry = (name, value) => {
    return (
      <Row key={name}>
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

  getValidationAlert(isInvalid) {
    if (isInvalid) {
      return (
        <Alert bsStyle="danger">
          Please validate all data on {isInvalid} before continuing.
        </Alert>
      )
    }
  }

  displayPrintSection(section) {
    var html = "<h3>" + section.title + "</h3><table>";
    var rows = section.rows.map((row) => "<tr><td>" + row.name + "</td><td>" + row.value + "</td></tr>").join("");
    html += rows + "</table>";
    return html;
  }

  displaySection(section) {
    return (
      <Panel key={section.title}>
        <Panel.Heading>{section.title}</Panel.Heading>
        <Panel.Body>{section.rows.map((row) => this.getRowEntry(row.name, row.value))}</Panel.Body>
      </Panel>
    )
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
        <Grid className="main-grid" ref={div => {this.rootDiv = div; }}>
          {this.getReview()}
          {this.pageInformation.map((section) => this.displaySection(section))}
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