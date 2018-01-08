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

class PageThree extends Component {

  handleSubmit = (evt) => {
    this.props.goToPage(1);
  }

  getPatientInformation() {
    return (
      <Panel>
        <Panel.Heading>Patient Information</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xs={12}>
              First Name - {this.props.firstName}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Middle Initial - {this.props.middleInitial}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Last Name - {this.props.lastName}
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
)(PageThree)