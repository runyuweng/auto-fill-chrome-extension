import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , browserHistory , hashHistory} from 'react-router';

import MainLayout from './src/MainLayout.jsx';

const Routes = () => {
  return(
    <Router history = {hashHistory}>
      <Route path="/" component={MainLayout}>
      </Route>
    </Router>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
