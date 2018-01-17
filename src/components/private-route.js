import React, {
  Component
} from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import {
  connect
} from 'react-redux'

class PrivateRoute extends Component {

  render() {
    return this.privateRoute(this.props);
  }

  privateRoute = ({
    component: Component,
    ...rest
  }) => (
    <Route {...rest} render={props => (this.props.loggedIn ? (<Component {...props} />): (<Redirect to="/login" />))
}
/>
)

}

export default connect(
  (state) => ({
    loggedIn: state.authentication.loggedIn,
  }), {

  }
)(PrivateRoute)