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
  FormControl
} from 'react-bootstrap'
import FieldGroup from '../forms/field-group'
import {
  login
} from '../../actions/authentication'
import './index.css'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateOfBirth: ''
    };
  }


  submit = () => {
    this.props.login(true);
  }

  updateDateOfBirth = (evt) => {
    this.setState({
      dateOfBirth: evt.target.value
    });
  }

  createLoginPage() {
    return (
      <div className="container">
          <div className="Absolute-Center is-Responsive">
            <Panel>
              <Panel.Heading>We want to make sure who you are</Panel.Heading>
              <Panel.Body>
                <FormGroup controlId={1} >
                  <ControlLabel>Please enter your date of birth</ControlLabel>
                  <FormControl type="text" id="dateOfBirth" onChange={this.updateDateOfBirth} />
                </FormGroup>
                <Button bsStyle="primary" onClick={this.submit}>Submit</Button>
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
    actualDateOfBirth: state.registration.dateOfBirth,
    enteredDateoFBirth: state.authentication.dateOfBirth
  }), {
    login
  }
)(Login);