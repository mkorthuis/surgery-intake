import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Grid
} from 'react-bootstrap'
import {
  updateRegistrationValue,
  validateFields,
  updatePage,
  load
} from '../../actions/registration'

import RegisterPageOne from './page-one'
import RegisterPageTwo from './page-two'
import RegisterPageThree from './page-three'
import RegisterPageFour from './page-four'
import RegisterPageFive from './page-five'
import RegisterPageSix from './page-six'

import './index.css';

class Registration extends Component {

  constructor(props) {
    super();
    props.load(props.emailToken);
  }

  handleInputChange = (evt, page) => {
    var value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    this.props.updateRegistrationValue({
      [evt.target.id]: value
    });

  };

  handleNavSelect = (selectedKey) => {
    this.goToPage(selectedKey);
  }

  goToPage = (pageId) => {
    this.props.updatePage(pageId);
    window.scrollTo(0, 0)
  }

  validateFields = (fields, page) => {
    this.props.validateFields(fields, page);
  }

  getPage() {
    switch (this.props.page) {
      case 1:
        return <RegisterPageOne handleInputChange={this.handleInputChange} validate={this.validateFields} goToPage={this.goToPage} />;
      case 2:
        return <RegisterPageTwo handleInputChange={this.handleInputChange} validate={this.validateFields} goToPage={this.goToPage} />;
      case 3:
        return <RegisterPageThree handleInputChange={this.handleInputChange} validate={this.validateFields} goToPage={this.goToPage} />;
      case 4:
        return <RegisterPageFour handleInputChange={this.handleInputChange} validate={this.validateFields} goToPage={this.goToPage} />;
      case 5:
        return <RegisterPageFive handleInputChange={this.handleInputChange} validate={this.validateFields} goToPage={this.goToPage} />;
      case 6:
        return <RegisterPageSix />
      default:
        return <RegisterPageOne handleInputChange={this.handleInputChange} validate={this.validateFields} goToPage={this.goToPage} />;
    }
  }

  getNavClassName(page) {
    return this.props.page === page ? "nav_progress__step nav_progress__step--active" : "nav_progress__step"
  }

  getNavItem(description, pageNumber) {
    return (
      <div id="1" className={this.getNavClassName(pageNumber)} onClick={() => this.goToPage(pageNumber)}>
        <div className="nav_progress__label">
          <span className="nav_progress__badge">
            <span className="nav_progress__number">{pageNumber}</span>
          </span>
          <span className="nav_progress__title">{description}</span>
        </div>
      </div>
    )
  }

  getNavBar() {
    return (
      <Grid className="main-grid">
        <div className="nav_progress progress--five">
          {this.getNavItem('Procedure', 1)}
          {this.getNavItem('Contact Information', 2)}
          {this.getNavItem('Contact Preferences', 3)}
          {this.getNavItem('Health History', 4)}
          {this.getNavItem('Review & Send', 5)}
        </div>
      </Grid>
    );
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
    page: state.registration.page,
    emailToken: state.authentication.emailToken
  }), {
    updateRegistrationValue,
    validateFields,
    updatePage,
    load
  }
)(Registration)