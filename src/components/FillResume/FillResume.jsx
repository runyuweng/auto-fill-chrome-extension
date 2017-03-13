import React from 'react';
import { Link } from 'react-router';
import './index.scss';

class FillResume extends React.Component {
  render() {
    return(
      <div className="fillResume">
        <div>
          <label>姓名：</label><input type="text"/>
        </div>
        <div>
          <label>性别：</label><input type="text"/>
        </div>
        <div>
          <label>年龄：</label><input type="text"/>
        </div>
      </div>
    )
  }
}
export default FillResume;
