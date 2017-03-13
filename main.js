import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , browserHistory , hashHistory} from 'react-router';

import FillResume from './src/components/FillResume/FillResume.jsx';
import ModifyResume from './src/components/ModifyResume/ModifyResume.jsx';
import Main from './src/components/Main/Main.jsx';
import MainLayout from './src/components/MainLayout/MainLayout.jsx';

const Routes = () => {
  return(
    <Router history = {hashHistory}>
      <Route path="/" component={Main}></Route>
      <Route path="/resume" component={MainLayout}>
        <Route path="fill" component={FillResume}></Route>
        <Route path="modify" component={ModifyResume}></Route>
      </Route>
    </Router>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
