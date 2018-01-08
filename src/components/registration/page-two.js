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

class PageTwo extends Component {

  handleSubmit = (evt) => {
    this.props.goToPage(3);
  }

  getMedicalFacility() {
    return (
      <Panel>
        <Panel.Heading>Validate Medical Facility</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xs={12}>
              Institution Name
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Institution Address
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Correct Facility?
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

  }), {

  }
)(PageTwo)