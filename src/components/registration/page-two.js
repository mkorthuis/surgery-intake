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
  Checkbox
} from 'react-bootstrap'
import FieldGroup from '../forms/field-group'
import {
  connect
} from 'react-redux'

class PageTwo extends Component {

  handleSubmit = (evt) => {
    this.props.goToPage(3);
  }

  handleCorrectFacility = (evt) => {
    console.log('Test');
    this.props.handleInputChange(evt);
    // if (evt.target.checked) {
    //   this.refs.institutionName.disabled = false;
    // } else {
    //   this.refs.institutionName.disabled = true;
    // }
  }

  componentWillReceiveProps(props) {
    console.log('Recieved!');
  }

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
                defaultValue={this.props.institutionName}
                onChange={this.props.handleInputChange}
                disabled
                ref="institutionName"
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FieldGroup
                id="institutionAddress"
                type="text"
                label="Institution Address"
                defaultValue={this.props.institutionAddress}
                onChange={this.props.handleInputChange}
                disabled
                ref="institutionAddress"
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <Checkbox id="correctFacility" onChange={this.handleCorrectFacility} inline>Correct Facility?</Checkbox>
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
        <Grid>
          {this.getMedicalFacility()}
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
    institutionAddress: state.registration.institutionAddress
  }), {

  }
)(PageTwo)