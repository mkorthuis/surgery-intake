import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Panel
} from 'react-bootstrap'

class PageSix extends Component {
  render() {
    return (<Panel>Thank you for your submission</Panel>)
  }
}

export default connect(
  (state) => ({

  }), {

  }
)(PageSix)