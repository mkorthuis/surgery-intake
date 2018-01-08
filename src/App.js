import React, {
  Component
} from 'react';
import {
  Route,
  IndexRoute,
  Switch
} from 'react-router-dom';

import Header from './components/header'
import Registration from './components/registration'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route path="*" component={Registration} />
        </Switch>
      </div>
    );
  }
}

export default App;