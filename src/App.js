import React, {
  Component
} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/header'
import Registration from './components/registration'
import NoMatch from './components/no-match'
import PrivateRoute from './components/private-route'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/registration" component={Registration} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;