import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Grid,
  Row,
  Col,
  Panel,
  Button
} from 'react-bootstrap'
import FieldGroup from '../forms/field-group'

class PageOne extends Component {

  handleSubmit = (evt) => {
    this.props.goToPage(2);
  }

  getPatientInformation() {
    return (
      <Panel>
        <Panel.Heading>Patient Information</Panel.Heading>
        <Panel.Body>
        <Row>
          <Col md={5}>
            <FieldGroup
              id="firstName"
              type="text"
              label="First Name"
              defaultValue={this.props.firstName}
              onChange={this.props.handleInputChange}
              />
          </Col>
          <Col md={2}>
            <FieldGroup
              id="middleInitial"
              type="text"
              label="Middle Initial"
              defaultValue={this.props.middleInitial}
              onChange={this.props.handleInputChange}
              />
          </Col>
          <Col md={5}>
            <FieldGroup
              id="lastName"
              type="text"
              label="Last Name"
              defaultValue={this.props.lastName}
              onChange={this.props.handleInputChange}
              />
          </Col>
        </Row>
        <Row> 
          <Col md={6}>
            <FieldGroup
              id="preferredName"
              type="text"
              label="Preferred Name"
              defaultValue={this.props.preferredName}
              onChange={this.props.handleInputChange}
              />
          </Col>
          <Col md={4}>
            <FieldGroup 
              id="dateOfBirth"
              type="text"
              label="Patient Date of Birth"
              defaultValue={this.props.dateOfBirth}
              onChange={this.props.handleInputChange}
            />
          </Col>
          <Col md={2}>
            Sex
          </Col>
        </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getPatientAddress() {
    return (
      <Panel>
        <Panel.Heading>Patient Address</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="addressOne"
                type="text"
                label="Address 1"
                defaultValue={this.props.addressOne}
                onChange={this.props.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="addressTwo"
                type="text"
                label="Address 2"
                defaultValue={this.props.addressTwo}
                onChange={this.props.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FieldGroup
                id="city"
                type="text"
                label="City"
                defaultValue={this.props.city}
                onChange={this.props.handleInputChange}
              />
            </Col>
            <Col md={4}>
              <FieldGroup
                id="state"
                type="text"
                label="State"
                defaultValue={this.props.state}
                onChange={this.props.handleInputChange}
              />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getContactNumbers() {
    return (
      <Panel>
        <Panel.Heading>Contact Numbers</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="mobilePhone"
                type="text"
                label="Mobile Phone"
                defaultValue={this.props.mobilePhone}
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="homePhone"
                type="text"
                label="Home Phone"
                defaultValue={this.props.homePhone}
                onChange={this.props.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FieldGroup
                id="workPhone"
                type="text"
                label="Work Phone"
                defaultValue={this.props.workPhone}
                onChange={this.props.handleInputChange}
                />
            </Col>
            <Col md={4}>
              <FieldGroup
                id="workPhoneExtension"
                type="text"
                label="Extension"
                defaultValue={this.props.workPhoneExtension}
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
          {this.getPatientInformation()}
          {this.getPatientAddress()}
          {this.getContactNumbers()}
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
    firstName: state.registration.firstName,
    middleInitial: state.registration.middleInitial,
    lastName: state.registration.lastName,
    preferredName: state.registration.preferredName,
    dateOfBirth: state.registration.dateOfBirth,
    addressOne: state.registration.addressOne,
    addressTwo: state.registration.addressTwo,
    city: state.registration.city,
    state: state.registration.state,
    mobilePhone: state.registration.mobilePhone,
    homePhone: state.registration.homePhone,
    workPhone: state.registration.workPhone,
    workPhoneExtension: state.registration.workPhoneExtension
  }), {

  }
)(PageOne)