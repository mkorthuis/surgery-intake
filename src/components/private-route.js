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
    <Route {...rest} render={props => (this.props.loggedIn ? (<Component {...props} />): (<Redirect to={{
      pathname: '/',
      search: this.props.location.search
    }} />))
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