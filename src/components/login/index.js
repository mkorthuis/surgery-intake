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
  HelpBlock
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
              <Panel.Heading>We want to make sure who you are</Panel.Heading>
              <Panel.Body>
                <form onSubmit={this.handleValidation}>
                  <FormGroup validationState={(this.props.touched && !this.props.valid) ? 'error' : null}>
                    <ControlLabel>Please enter your date of birth</ControlLabel>
                    <DatePicker id="dateOfBirth" value={this.props.enteredDateOfBirth} onChange={this.updateDateOfBirth} />
                    {(this.props.touched && !this.props.valid) && <HelpBlock>{this.props.message}</HelpBlock>}
                  </FormGroup>
                  <Button bsStyle="primary" type="submit">Submit</Button>
                </form>
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