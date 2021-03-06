import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Panel,
  Grid,
  Row,
  Col,
  Button,
  FormGroup,
  Checkbox
} from 'react-bootstrap'
import {
  getListValue,
  states,
  procedureSites,
  docs,
  yesNo
} from '../forms/lists'
import {
  updateRegistrationValue,
  disableValidation,
  save
} from '../../actions/registration'
import FieldGroup from '../forms/field-group'
import union from 'lodash/union'
import moment from 'moment-es6';

class PageOne extends Component {

  page = 1;

  handleSubmit = (evt) => {
    evt.preventDefault();
    var formValues = {};
    var fields = [
      'correctProcedure',
      'docPerforming',
      'unknownDocPerforming',
      'procedurePerformed',
      'procedureDate',
      'procedureSite',
      'institutionName',
      'institutionAddressOne',
      'institutionAddressTwo',
      'institutionCity',
      'institutionState',
      'institutionZip',
      'correctFacility',
      'understandPatientNotice',
      'ackOwnership'
    ];

    for (var i in fields) {
      formValues[fields[i]] = this.props[fields[i]].value;
    }
    this.props.validate(formValues, this.page);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.validation) {
      var changes = {
        correctProcedure: this.props.correctProcedure.value,
        docPerforming: this.props.docPerforming.value,
        unknownDocPerforming: this.props.unknownDocPerforming.value,
        procedurePerformed: this.props.procedurePerformed.value,
        procedureDate: this.props.procedureDate.value,
        procedureSite: this.props.procedureSite.value,

        correctFacility: this.props.correctFacility.value,
        institutionName: this.props.institutionName.value,
        institutionAddressOne: this.props.institutionAddressOne.value,
        institutionAddressTwo: this.props.institutionAddressTwo.value,
        institutionCity: this.props.institutionCity.value,
        institutionState: this.props.institutionState.value,
        institutionZip: this.props.institutionZip.value,

        ackOwnership: this.props.ackOwnership.value,
        understandPatientNotice: this.props.understandPatientNotice.value
      }
      save(this.props.emailToken, this.props.original, changes);
      this.props.goToPage(this.page + 1);
    }
  }

  handleProcedureDateChange = (value) => {
    this.props.disableValidation(this.page);
    this.props.updateRegistrationValue({
      'procedureDate': value
    });
  }

  handleInputChange = (evt) => {
    this.props.disableValidation(this.page);
    this.props.handleInputChange(evt);
  }

  getProcedureInfo() {
    if (this.props.correctProcedure.value !== "no") {
      return (
        <span>
          <b>Name of Surgeon:</b> {getListValue(docs, this.props.docPerforming.value)}<br />
          <b>Procedure to Perform:</b> {this.props.procedurePerformed.value}<br />
          <b>Procedure Site:</b> {getListValue(procedureSites, this.props.procedureSite.value)}<br />
          <b>Procedure Date:</b> {(this.props.procedureDate.value || this.props.procedureDate.value==='') ? moment(this.props.procedureDate.value).format("M/D/YYYY") : ''}
          <hr />
        </span>
      )
    } else {
      return (
        <span>
          <Row>
            <Col xs={12}>
              <p>Please enter the correct procedure information below:</p>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <FieldGroup
                id="procedurePerformed"
                type="text"
                label="Procedure to Perform"
                value={this.props.procedurePerformed}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={5}>
              <FieldGroup
                id="procedureSite"
                type="select"
                label="Procedure Site"
                value={this.props.procedureSite}
                options={union([{name:'Select', value:''}],procedureSites)}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          {this.props.docPerforming.value !== '-1' || this.getUnkownDoctor()}
          <Row>
            <Col md={8}>
              <FieldGroup
                id="docPerforming"
                type="select"
                label="Who is performing the procedure, surgery or consult?"
                value={this.props.docPerforming}
                options={union([{name:'Select', value:''}], docs, [{name:'Doctor name not listed', value:'-1'}])}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={4}>
              <FieldGroup
                id="procedureDate"
                type="datePicker"
                label="Procedure Date"
                value={this.props.procedureDate}
                onChange={this.handleProcedureDateChange}
                />
            </Col>
          </Row>
          <hr />
        </span>
      )
    }
  }

  getProcedure() {
    return (
      <Panel>
        <Panel.Heading>Procedure Information</Panel.Heading>
        <Panel.Body>
          {this.getProcedureInfo()}
          <Row>
            <Col md={4}>
              <FieldGroup
                id="correctProcedure"
                type="select"
                label="Is this procedure information correct?"
                value={this.props.correctProcedure}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange} 
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getUnkownDoctor() {
    return (
      <Row>
        <Col md={10} mdOffset={2} >
          <FieldGroup
            id="unknownDocPerforming"
            type="text"
            label="Doctor Name"
            value={this.props.unknownDocPerforming}
            onChange={this.handleInputChange}
            />
        </Col>
      </Row>
    )
  }


  getInstitutionInfo() {
    if (this.props.correctFacility.value !== 'no') {
      var addressLineTwo = this.props.institutionAddressTwo.value ? <br /> : '';
      return (
        <Row>
          <Col xs={12}>
            <p>The medical facility for your operation is:</p>
            <p>
              <b>{this.props.institutionName.value}</b><br />
              {this.props.institutionAddressOne.value}<br />
              {this.props.institutionAddressTwo.value ? (this.props.institutionAddressTwo.value) : ''} {addressLineTwo}
              {this.props.institutionCity.value}, {this.props.institutionState.value} {this.props.institutionZip.value}
            </p>
          </Col>
        </Row>
      )
    } else {
      return (
        <span>
        <Row>
          <Col xs={12}>
            <p>Please enter the correct medical facility information below:</p>
          </Col>
          <Col xs={12}>
            <FieldGroup
              id="institutionName"
              type="text"
              label=" Name"
              value={this.props.institutionName}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FieldGroup
              id="institutionAddressOne"
              type="text"
              label="Address Line One"
              value={this.props.institutionAddressOne}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FieldGroup
              id="institutionAddressTwo"
              type="text"
              label="Address Line Two"
              value={this.props.institutionAddressTwo}
              onChange={this.handleInputChange}
              />
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <FieldGroup
              id="institutionCity"
              type="text"
              label="City"
              value={this.props.institutionCity}
              onChange={this.handleInputChange}
            />
            </Col>
          <Col md={4}>
            <FieldGroup
              id="institutionState"
              type="select"
              label="State"
              value={this.props.institutionState}
              options={union([{name:'Select', value:''}],states)}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col md={3}>
            <FieldGroup
              id="institutionZip"
              type="text"
              label="Zip"
              value={this.props.institutionZip}
              onChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <hr />
      </span>
      )
    }
  }

  getMedicalFacility() {
    return (
      <Panel>
        <Panel.Heading>Medical Facility</Panel.Heading>
        <Panel.Body>
          {this.getInstitutionInfo()}
          <Row>
            <Col md={4}>
              <FieldGroup
                id="correctFacility"
                type="select"
                label="Is this the correct facility?"
                value={this.props.correctFacility}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange} 
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
              <p>Stealth Company is required by state and federal regulations to provice the following disclosures and policies to each patient.  
              Please check each box to acknowledge that you have read and accept these disclosures and policies.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup validationState={(this.props.understandPatientNotice.touched ? this.props.understandPatientNotice.validation : null) || this.props.understandPatientNotice.serverValidation} >
                <Checkbox 
                  id="understandPatientNotice" 
                  onChange={this.handleInputChange} 
                  defaultChecked={this.props.understandPatientNotice.value}  
                  inline>
                  I understand and accept the Notice of Patients.
                </Checkbox> 
                <a href="https://stanfordhealthcare.org/content/dam/SHC/patientsandvisitors/your-hospital-stay/docs/authorization-disclosure-health-information-2016.pdf" target="blank">PDF</a>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup validationState={(this.props.ackOwnership.touched ? this.props.ackOwnership.validation : null) || this.props.ackOwnership.serverValidation}>
                <Checkbox 
                  id="ackOwnership"
                  onChange={this.handleInputChange} 
                  defaultChecked={this.props.ackOwnership.value} 
                  inline>
                  I understand and accept the Acknowledgement of Ownership.
                </Checkbox> 
                <a href="https://stanfordhealthcare.org/content/dam/SHC/patientsandvisitors/your-hospital-stay/docs/authorization-disclosure-health-information-2016.pdf" target="blank">PDF</a>
              </FormGroup>
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
          <Panel>
            <Panel.Heading>Overview</Panel.Heading>
            <Panel.Body>
              <p>Sed varius metus non tellus dapibus accumsan. Pellentesque tincidunt elementum odio, a sodales nunc bibendum ac. Nam sagittis porta molestie. Vestibulum in auctor neque. Fusce pulvinar placerat nulla eu fermentum. Proin facilisis, ipsum eu tincidunt ultrices, lorem turpis fermentum nunc, ut rhoncus enim ex vel neque. In ac arcu ac lorem cursus hendrerit non quis elit. Curabitur vel urna in turpis tincidunt hendrerit. Vivamus ac eros eu neque iaculis faucibus. Praesent sed vulputate felis, nec posuere ex. Sed fringilla posuere magna. Integer fringilla iaculis odio, in ultrices leo commodo imperdiet. Fusce tristique risus a mauris eleifend sodales. Morbi faucibus aliquet nibh, non fermentum orci aliquet nec.</p>
              <p>In the pages that follow you will be asked questions regarding your medical history which will help your surgeon and the care team to better serve you. Please answer all questions to the best of your ability.</p>
            </Panel.Body>
          </Panel>
          {this.getProcedure()}
          {this.getMedicalFacility()}
          {this.getDisclosuresPolicies()}          
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
    correctProcedure: state.registration.correctProcedure,
    docPerforming: state.registration.docPerforming,
    unknownDocPerforming: state.registration.unknownDocPerforming,
    procedurePerformed: state.registration.procedurePerformed,
    procedureDate: state.registration.procedureDate,
    procedureSite: state.registration.procedureSite,

    institutionName: state.registration.institutionName,
    institutionAddressOne: state.registration.institutionAddressOne,
    institutionAddressTwo: state.registration.institutionAddressTwo,
    institutionCity: state.registration.institutionCity,
    institutionState: state.registration.institutionState,
    institutionZip: state.registration.institutionZip,
    correctFacility: state.registration.correctFacility,

    understandPatientNotice: state.registration.understandPatientNotice,
    ackOwnership: state.registration.ackOwnership,

    validation: state.registration.validation['1'],

    original: state.registration.original,

    emailToken: state.authentication.emailToken
  }), {
    updateRegistrationValue,
    disableValidation
  }
)(PageOne)