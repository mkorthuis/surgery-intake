import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Panel
} from 'react-bootstrap'

class NoMatch extends Component {

  render() {
    return (
      <div className="container">
          <div className="Absolute-Center is-Responsive">
              <Panel>
                  <Panel.Body>
                      <h1 className="text-center">Page Not Found</h1>
                      <p className="text-center">The page you are looking for doesn't exist or an error occured.</p>
                  </Panel.Body>
              </Panel>
          </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({

  }), {

  }
)(NoMatch)