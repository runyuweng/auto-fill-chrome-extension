import React from 'react';
import { Link } from 'react-router';
import './index.scss';

class Main extends React.Component {
  render() {
    return(
      <div className="main">
        <div className="btn_group">
          <Link to='/'><button><img src="./img/finish.png"/>一键填充</button></Link>
          <Link to='/resume/fill'><button>填写个人简历</button></Link>
          <Link to='/resume/modify'><button>修改个人简历</button></Link>
        </div>
      </div>
    )
  }
}
export default Main;
