import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'

class FourOhFour extends Component {

  render() {
    return (
      <div>This is the 404 Page</div>
    );
  }
}

export default connect(
  (state) => ({

  }), {

  }
)(FourOhFour)