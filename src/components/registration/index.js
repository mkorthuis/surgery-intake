import React, {
  Component
} from 'react'
import {
  LinkContainer
} from 'react-router-bootstrap';
import {
  connect
} from 'react-redux'
import {
  Nav,
  NavItem,
  Grid
} from 'react-bootstrap'
import {
  updateRegistration
} from '../../actions/registration'

import RegisterPageOne from './page-one'
import RegisterPageTwo from './page-two'
import RegisterPageThree from './page-three'
import RegisterPageFour from './page-four'


class Registration extends Component {

  handleInputChange = (evt) => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    this.props.updateRegistration({
      [evt.target.id]: value
    });
  };

  handleNavSelect = (selectedKey) => {
    this.goToPage(selectedKey);
  }

  goToPage = (pageId) => {
    this.props.updateRegistration({
      page: pageId
    });
  }

  getNavBar() {
    return (
      <Grid>
      <Nav bsStyle="pills" onSelect={this.handleNavSelect}>
        <NavItem eventKey={1} >
          Account Registration
        </NavItem>
        <NavItem eventKey={2}>
          Patient & Visit Information
        </NavItem>
        <NavItem eventKey={3}>
          Health History
        </NavItem>
        <NavItem eventKey={4}>
          Review & Send
        </NavItem>
      </Nav>
      </Grid>
    );
  }

  getPage() {
    switch (this.props.page) {
      case 1:
        return <RegisterPageOne handleInputChange={this.handleInputChange} goToPage={this.goToPage} />;
      case 2:
        return <RegisterPageTwo handleInputChange={this.handleInputChange} goToPage={this.goToPage} />;
      case 3:
        return <RegisterPageThree handleInputChange={this.handleInputChange} goToPage={this.goToPage} />;
      case 4:
        return <RegisterPageFour handleInputChange={this.handleInputChange} goToPage={this.goToPage} />;
      default:
        return <RegisterPageOne handleInputChange={this.handleInputChange} goToPage={this.goToPage} />;
    }
  }

  render() {
    return (
      <div>
        {this.getNavBar()}
        {this.getPage()}
      </div>
    )
  }

}

export default connect(
  (state) => ({
    page: state.registration.page
  }), {
    updateRegistration
  }
)(Registration)