import React from 'react';
import { Link } from 'react-router';
import './index.scss';
import message from '../Public/Message.jsx';

console.log(message);
class Main extends React.Component {
  render() {
    return(
      <div className="main">
        <p className="title">感谢您的使用</p>
        <ul>
          <li>
            <img src="./img/fill.png"/>
            <span onClick={()=>{
                chrome.extension.sendRequest({type: "fill"}, function(response) {
                  if (response.message==="success") {
                    message.success('开始填充');
                  }
                });
              }}>一键填充</span>
          </li>
          <li>
            <Link to='/resume/fill'>
              <img src="./img/input.png"/>
              <span>填写个人简历</span>
            </Link>
            </li>
          <li>
            <Link to='/resume/modify'>
              <img src="./img/modify.png"/>
              <span>修改个人简历</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Main;
