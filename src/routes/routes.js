import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Home } from './../pages';

class AppRouter extends React.Component {

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/inicio' component={Home} />
          <Redirect to='/inicio' />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;