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
  Col
} from 'react-bootstrap'

class PageSix extends Component {
  render() {
    return (
      <Grid className="main-grid">
        <Row>
          <Col xs={12}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Lowell_General_Hospital_%28logo%29.jpg" alt="Logo" className="pull-right Company-Logo"/>
            <h3>Thank you for submitting the form</h3>
            <p>We look forward to seeing you shortly</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam sem, congue in risus in, aliquet varius sapien. Cras interdum malesuada rutrum. Etiam posuere, dolor id euismod ullamcorper, velit urna pretium urna, id mattis odio dui maximus arcu. Phasellus imperdiet, nisi ac iaculis lobortis, nulla orci iaculis massa, et pellentesque ante purus quis tellus. Donec posuere congue erat et feugiat. Curabitur non ante eu mi euismod vehicula at a ligula. In ac arcu erat. Pellentesque at porta libero, vitae euismod eros. Aliquam facilisis mauris mauris, eu viverra neque feugiat eget. Etiam ultrices eros molestie posuere dictum. In malesuada dolor vel viverra auctor. Nulla semper faucibus facilisis.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  (state) => ({

  }), {

  }
)(PageSix)