import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Home } from './../pages';
const History = () => <p>History</p>;

class AppRouter extends React.Component {

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/inicio' component={Home} />
          <Route exact path='/history' component={History} />
          <Redirect to='/inicio' />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;