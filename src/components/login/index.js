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
  FormControl,
  HelpBlock
} from 'react-bootstrap'
import {
  login,
  validate,
  setDateOfBirth
} from '../../actions/authentication'
import DatePicker from 'react-16-bootstrap-date-picker';

import './index.css'

class Login extends Component {

  handleValidation = (evt) => {
    evt.preventDefault();
    if (this.props.actualDateOfBirth === this.props.enteredDateOfBirth) {
      this.props.validate(true, '');
    } else {
      this.props.validate(false, 'Invalid date format ( _ _ / _ _ / _ _ _ _ ). Please enter 02/24/1955');
    }
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
                  <FormGroup validationState={(this.props.touched && !this.props.valid) ? 'error' : ''}>
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
      <Redirect to="/registration" />
    )
  }

  render() {
    return this.props.loggedIn ? this.getRedirect() : this.createLoginPage();
  }
}

export default connect(
  (state) => ({
    loggedIn: state.authentication.loggedIn,
    actualDateOfBirth: state.registration.dateOfBirth.value,
    enteredDateOfBirth: state.authentication.dateOfBirth,
    message: state.authentication.message,
    valid: state.authentication.valid,
    touched: state.authentication.touched
  }), {
    login,
    validate,
    setDateOfBirth
  }
)(Login);