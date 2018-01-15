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
    this.props.goToPage(1);
  }

  getRowEntry = (name, value) => {
    return (
      <Row>
        <Col xs={12}>
          {name}: {value}
        </Col>
      </Row>
    )
  }

  getPatientInformation() {
    return (
      <Panel>
        <Panel.Heading>Patient Information</Panel.Heading>
        <Panel.Body>
          {this.getRowEntry('Name', this.props.firstName.value + ' ' + this.props.middleInitial.value + ' ' + this.props.lastName.value)}
          {this.getRowEntry('Preferred Name', this.props.preferredName.value)}
          {this.getRowEntry('Date of Birth', this.props.dateOfBirth.value)}
          {this.getRowEntry('Address One', this.props.addressOne.value)}
          {this.getRowEntry('Address Two', this.props.addressTwo.value)}
          {this.getRowEntry('City', this.props.city.value)}
          {this.getRowEntry('State', this.props.state.value)}
          {this.getRowEntry('Mobile Phone', this.props.mobilePhone.value)}
          {this.getRowEntry('Home Phone', this.props.homePhone.value)}
          {this.getRowEntry('Work Phone', this.props.workPhone.value)}
          {this.getRowEntry('Work Phone Extension', this.props.workPhoneExtension.value)}
          
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
)(PageFour)