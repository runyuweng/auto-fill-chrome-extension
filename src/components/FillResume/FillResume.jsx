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
          <label>性别：</label>男<input type="radio" name="sex" defaultChecked/>女<input type="radio" name="sex"/>
        </div>
        <div>
          <label>出生日期：</label><input type="date"/>
        </div>
        <div>
          <label>证件号码：</label><input type="text"/>
        </div>
        <div>
          <label>手机：</label><input type="text"/>
        </div>
        <div>
          <label>电子邮件：</label><input type="text"/>
        </div>
        <div>
          <label>紧急联系人：</label><input type="text"/>
        </div>
        <div>
          <label>紧急联系人电话：</label><input type="text"/>
        </div>

      </div>
    )
  }
}
export default FillResume;
