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
    this.props.goToPage(4);
  }

  getBasicScreening() {
    return (
      <Panel>
        <Panel.Heading>Basic Screening</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xs={12}>
              Height
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Weight
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Cigarette Smoking Status
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
          {this.getBasicScreening()}
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
)(PageThree)