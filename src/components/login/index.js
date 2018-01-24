import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Redirect
} from 'react-router-dom';
import {
  Panel,
  Button,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Grid,
  Row,
  Col,
  Image,
  Media
} from 'react-bootstrap'
import {
  login,
  validate,
  setDateOfBirth,
  setEmailToken
} from '../../actions/authentication'
import DatePicker from 'react-16-bootstrap-date-picker';

import './index.css'

class Login extends Component {

  constructor(props) {
    super();
    if (props.location.search && props.location.search.startsWith('?') && props.location.search.length > 1) {
      props.setEmailToken(props.location.search.substring(1));
    }
  }

  handleValidation = (evt) => {
    evt.preventDefault();
    this.props.validate(this.props.emailToken, this.props.enteredDateOfBirth);
  }

  updateDateOfBirth = (evt) => {
    this.props.setDateOfBirth(evt);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.valid) {
      this.props.login(true);
    }
  }

  createLoginPage() {
    return (
      <div className="container">
          <div className="Absolute-Center is-Responsive">
            <Panel>
              <Panel.Body>
                  <Row>
                    <Col md={7}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Lowell_General_Hospital_%28logo%29.jpg" className="pull-right Company-Logo"/>
                      <h3>Lets get started...</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam sem, congue in risus in, aliquet varius sapien. Cras interdum malesuada rutrum. Etiam posuere, dolor id euismod ullamcorper, velit urna pretium urna, id mattis odio dui maximus arcu. Phasellus imperdiet, nisi ac iaculis lobortis, nulla orci iaculis massa, et pellentesque ante purus quis tellus. Donec posuere congue erat et feugiat. Curabitur non ante eu mi euismod vehicula at a ligula. In ac arcu erat. Pellentesque at porta libero, vitae euismod eros. Aliquam facilisis mauris mauris, eu viverra neque feugiat eget. Etiam ultrices eros molestie posuere dictum. In malesuada dolor vel viverra auctor. Nulla semper faucibus facilisis.</p>
                    </Col>
                    <Col md={5}>
                      <h3>&nbsp;</h3>
                      <form onSubmit={this.handleValidation}>
                        <FormGroup validationState={(this.props.touched && !this.props.valid) ? 'error' : null}>
                          <ControlLabel>Please enter your date of birth to confirm who you are</ControlLabel>
                          <DatePicker id="dateOfBirth" value={this.props.enteredDateOfBirth} onChange={this.updateDateOfBirth} />
                          {(this.props.touched && !this.props.valid) && <HelpBlock>{this.props.message}</HelpBlock>}
                        </FormGroup>
                        <Button bsStyle="primary" type="submit">Continue</Button>
                      </form>
                    </Col>
                  </Row>
              </Panel.Body>
            </Panel>
          </div>
      </div>
    )
  }

  getRedirect() {
    return (
      <Redirect to={{
      pathname: '/registration/',
      search: this.props.emailToken
    }} />
    )
  }

  render() {
    return this.props.loggedIn ? this.getRedirect() : this.createLoginPage();
  }
}

export default connect(
  (state) => ({
    loggedIn: state.authentication.loggedIn,
    enteredDateOfBirth: state.authentication.dateOfBirth,
    message: state.authentication.message,
    valid: state.authentication.valid,
    touched: state.authentication.touched,
    emailToken: state.authentication.emailToken
  }), {
    login,
    validate,
    setDateOfBirth,
    setEmailToken
  }
)(Login);