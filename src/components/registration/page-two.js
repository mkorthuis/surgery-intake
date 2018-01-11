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
  Checkbox,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import FieldGroup from '../forms/field-group'
import {
  connect
} from 'react-redux'
import store, {
  history
} from '../../store';


class PageTwo extends Component {

  handleSubmit = (evt) => {
    this.props.goToPage(3);
  }

  docs = [{
    name: 'Murali Menon',
    id: 1
  }, {
    name: 'Farbod Hagigi',
    id: 2
  }, {
    name: 'Unknown',
    id: -99
  }];

  getDisabledInstitutionNameGroup() {
    if (this.props.incorrectFacility) {
      return <FieldGroup
                id="institutionName"
                type="text"
                label="Institution Name"
                defaultValue={this.props.institutionName}
                onChange={this.props.handleInputChange}
                />
    } else {
      return <FieldGroup
                id="institutionName"
                type="text"
                label="Institution Name"
                defaultValue={this.props.institutionName}
                onChange={this.props.handleInputChange}
                disabled
                />
    }
  }

  getDisabledInstitutionAddressGroup() {
    if (this.props.incorrectFacility) {
      return <FieldGroup
        id="institutionAddress"
        type="text"
        label="Institution Address"
        defaultValue={this.props.institutionAddress}
        onChange={this.props.handleInputChange}
        />
    } else {
      return <FieldGroup
        id="institutionAddress"
        type="text"
        label="Institution Address"
        defaultValue={this.props.institutionAddress}
        onChange={this.props.handleInputChange}
        disabled
        />
    }
  }

  getMedicalFacility() {
    return (
      <Panel>
        <Panel.Heading>Validate Medical Facility</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xs={12}>
              {this.getDisabledInstitutionNameGroup()}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {this.getDisabledInstitutionAddressGroup()}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <Checkbox id="incorrectFacility" onChange={this.props.handleInputChange} defaultChecked={this.props.incorrectFacility}  inline>Incorrect Facility? </Checkbox>
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
          <Row>
            <Col xs={12}>
              INSERT DISCLOSURES AND POLICIES HERE
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Checkbox id="understandPatientNotice" onChange={this.props.handleInputChange} defaultChecked={this.props.understandPatientNotice}  inline><ControlLabel>I understand and accept the Notice of Patients. "Read Document"</ControlLabel></Checkbox>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Checkbox id="ackOwnership" onChange={this.props.handleInputChange} defaultChecked={this.props.ackOwnership}  inline><ControlLabel>I understand and accept the Acknowledgement of Ownership. "Read Document"</ControlLabel></Checkbox>
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
              <FormGroup>
                <ControlLabel>Who is performing the procedure, surgery or consult?</ControlLabel>
                <FormControl id="docPerforming" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  {
                    this.docs.map((doc, index) => {
                      return (<option key={index} value={doc.id}>{doc.name}</option>);
                    })
                  }
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Procedure Site</ControlLabel>
                <FormControl id="procedureSite" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                  <option value="both">Both</option>
                  <option value="notApplicable">Not Applicable</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="procedureSurgeryConsultType"
                type="text"
                label="Type of Procedure, Surgery, or Consult"
                defaultValue={this.props.procedureSurgeryConsultType}
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
                defaultValue={this.props.procedureSurgeryConsultReason}
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
              <FormGroup>
                <ControlLabel>Choose a weekday contact phone number</ControlLabel>
                <FormControl id="weekdayPhoneType" componentClass="select" placeholder="select">
                  <option value="mobile">Mobile</option>
                  <option value="home">Home</option>
                  <option value="work">Work / Other</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Choose the number where the healthcare team can leave a voice message</ControlLabel>
                <FormControl id="voiceMailNumber" componentClass="select" placeholder="select">
                  <option value="mobile">Mobile</option>
                  <option value="home">Home</option>
                  <option value="work">Work / Other</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Can the healthcare team send you a text message with healthcare information?</ControlLabel>
                <FormControl id="textMessageApproval" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </FormControl>
              </FormGroup>
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
              <FormGroup>
                <ControlLabel>In case of an emergency, is there a family member we should contact?</ControlLabel>
                <FormControl id="familyMemberContact" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Family Member Relationship to the Patient</ControlLabel>
                <FormControl id="familyMemberContact" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                  <option value="son">Son</option>
                  <option value="daughter">Daughter</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="familyMemberFirstName"
                type="text"
                label="Family Member First Name"
                defaultValue={this.props.familyMemberFirstName}
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="familyMemberLastName"
                type="text"
                label="Family Member Last Name"
                defaultValue={this.props.familyMemberLastName}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Does this family member have the same address as the patient?</ControlLabel>
                <FormControl id="familyMemberContact" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </FormControl>
              </FormGroup>
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
              <FormGroup>
                <ControlLabel>Primary Insurance</ControlLabel>
                <FormControl id="primaryInsuranceType" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="insuranceCompany">Insurance Company</option>
                  <option value="medicare">Medicare</option>
                  <option value="medicaid">Medicaid</option>
                  <option value="workersComp">Workers Compensation</option>
                  <option value="medex">Medex</option>
                  <option value="tricare">Tricare</option>
                  <option value="selfPay">Self Pay</option>
                  <option value="other">Other</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Secondary Insurance?</ControlLabel>
                <FormControl id="secondaryInsurance" componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </FormControl>
              </FormGroup>
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
    incorrectFacility: state.registration.incorrectFacility
  }), {

  }
)(PageTwo)