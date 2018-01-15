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
import union from 'lodash/union'


class PageTwo extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    var formValues = {};
    var fields = ['procedureSurgeryConsultType', 'procedureSurgeryConsultReason'];
    for (var i in fields) {
      formValues[fields[i]] = this.props[fields[i]].value;
    }
    this.props.validate(formValues, 2);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.validation) {
      this.props.goToPage(3);
    }
  }

  docs = [{
    name: 'Murali Menon',
    value: 1
  }, {
    name: 'Farbod Hagigi',
    value: 2
  }, {
    name: 'Unknown',
    value: -99
  }];

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
                value={this.props.institutionName}
                onChange={this.props.handleInputChange}
                disabled={this.props.incorrectFacility.value}
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="institutionAddress"
                type="text"
                label="Institution Address"
                value={this.props.institutionAddress}
                onChange={this.props.handleInputChange}
                disabled={this.props.incorrectFacility.value}
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="incorrectFacility"
                type="checkbox"
                label="Incorrect Facility?"
                value={this.props.incorrectFacility}
                onChange={this.props.handleInputChange} 
                />
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
          <Row>
            <Col xs={12}>
              INSERT DISCLOSURES AND POLICIES HERE
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="understandPatientNotice"
                type="checkbox"
                label="I understand and accept the Notice of Patients. (Read Document)"
                value={this.props.understandPatientNotice}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="ackOwnership"
                type="checkbox"
                label="I understand and accept the Acknowledgement of Ownership. (Read Document)"
                value={this.props.ackOwnership}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getDoctorAndVisit() {
    return (
      <Panel>
        <Panel.Heading>Doctor & Visit Details</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="docPerforming"
                type="select"
                label="Who is performing the procedure, surgery or consult?"
                value={this.props.docPerforming}
                options={union([{name:'Select', value:''}],this.docs)}
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="procedureSite"
                type="select"
                label="Procedure Site"
                value={this.props.procedureSite}
                options={[{name:'Select', value:''},{name:'Left', value:'left'},{name:'Right', value:'right'},{name:'Both', value:'both'},{name:'Not Applicable', value:'notApplicable'}]}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="procedureSurgeryConsultType"
                type="text"
                label="Type of Procedure, Surgery, or Consult"
                value={this.props.procedureSurgeryConsultType}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="procedureSurgeryConsultReason"
                type="text"
                label="Reason for Procedure, Surgery, or Consult"
                value={this.props.procedureSurgeryConsultReason}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body> 
      </Panel>
    )
  }

  getContactPreferences() {
    return (
      <Panel>
        <Panel.Heading>Contact Preferences</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="weekdayPhoneType"
                type="select"
                label="Choose a weekday contact phone number"
                value={this.props.weekdayPhoneType}
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
            <Col md={6}>
              <FieldGroup
                id="familyMemberRelationship"
                type="select"
                label="Family Member Relationship to the Patient"
                value={this.props.familyMemberRelationship}
                options={[{name:'Select', value:''},{name:'Mother', value:'mother'},{name:'Father', value:'father'},{name:'Son', value:'son'},{name:'Daughter',value:'daughter'}]}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
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
          {this.displayFamilyMemberAddress()}
        </Panel.Body>
      </Panel>
    )
  }

  displayFamilyMemberAddress() {
    //TODO  "Add Family Member Address";
    return "";
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
                options={[{value:'',name:'Select'},{value:'insuranceCompany',name:'Insurance Company'},{value:'medicare',name:'Medicare'},{value:'medicaid',name:'Medicaid'},{value:'workersComp',name:'Workers Compensation'},{value:'medex',name:'Medex'},{value:'tricare',name:'Tricare'},{value:'selfPay',name:'Self Pay'},{value:'other',name:'Other'}]}
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="secondaryInsurance"
                type="select"
                label="Secondary Insurance?"
                value={this.props.secondaryInsurance}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </Row>
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
          {this.getDoctorAndVisit()}
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
    institutionAddress: state.registration.institutionAddress,
    incorrectFacility: state.registration.incorrectFacility,
    understandPatientNotice: state.registration.understandPatientNotice,
    ackOwnership: state.registration.ackOwnership,
    docPerforming: state.registration.docPerforming,
    procedureSite: state.registration.procedureSite,
    procedureSurgeryConsultType: state.registration.procedureSurgeryConsultType,
    procedureSurgeryConsultReason: state.registration.procedureSurgeryConsultReason,
    weekdayPhoneType: state.registration.weekdayPhoneType,
    voiceMailNumber: state.registration.voiceMailNumber,
    textMessageApproval: state.registration.textMessageApproval,
    familyMemberContact: state.registration.familyMemberContact,
    familyMemberRelationship: state.registration.familyMemberRelationship,
    familyMemberFirstName: state.registration.familyMemberFirstName,
    familyMemberLastName: state.registration.familyMemberLastName,
    familyMemberContactAddress: state.registration.familyMemberContactAddress,
    primaryInsuranceType: state.registration.primaryInsuranceType,
    secondaryInsurance: state.registration.secondaryInsurance,
    validation: state.registration.validation['2']
  }), {

  }
)(PageTwo)