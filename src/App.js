import React, {
  Component
} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/header'
import Registration from './components/registration'
import FourOhFour from './components/four-oh-four'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/registration" component={Registration} />
            <Route component={FourOhFour} />
          </Switch>
      </div>
    );
  }
}

export default App;