import React, {
  Component
} from 'react'
import {
  LinkContainer
} from 'react-router-bootstrap';
import {
  connect
} from 'react-redux'

import './header.css';

class Header extends Component {

  render() {
    return (
      <div>I am a header</div>
    )
  }

}

export default connect(
  (state) => ({

  }), {

  }
)(Header)