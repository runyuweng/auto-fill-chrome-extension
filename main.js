import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , browserHistory , hashHistory} from 'react-router';

import Main from './src/components/Main/Main.jsx';
import MainLayout from './src/MainLayout.jsx';

const Routes = () => {
  return(
    <Router history = {hashHistory}>
      <Route path="/" component={Main}></Route>
      <Route path="/test" component={MainLayout}></Route>
    </Router>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
