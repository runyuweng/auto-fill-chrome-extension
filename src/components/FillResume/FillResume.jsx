import React from 'react';
import { Link } from 'react-router';
import './index.scss';

class FillResume extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personal:{
        name:'',
        sex:'',
        birth:'',
        id:'',
        tel:'',
        mail:'',
        emergency_contact:'',
        emergency_contact_tel:'',
        language:'',
        graduate:''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    console.log(e.target.name,e.target.value);
    let personal = JSON.parse(JSON.stringify(this.state.personal));
    personal[e.target.name] = e.target.value;
    this.setState({
      personal : personal
    })
  }
  handleSubmit(e){
    chrome.extension.sendRequest({type: "save",text:this.state}, function(response) {
      console.log(response);
    });
  }
  render() {
    const {personal} = this.state;
    return(
      <div className="fillResume">
        <p><img src="./img/personal.png"/>个人信息</p>
        <div>
          <label>姓名：</label><input name="name" type="text" value={personal.name} onChange={this.handleChange}/>
        </div>
        <div>
          <label>性别：</label><input name="sex" type="text" value={personal.sex} onChange={this.handleChange}/>
        </div>
        <div>
          <label>出生日期：</label><input name="birth" type="date" value={personal.birth} onChange={this.handleChange}/>
        </div>
        <div>
          <label>证件号码：</label><input name="id" type="text" value={personal.id} onChange={this.handleChange}/>
        </div>
        <div>
          <label>手机：</label><input name="tel" type="text" value={personal.tel} onChange={this.handleChange}/>
        </div>
        <div>
          <label>电子邮件：</label><input name="mail" type="text" value={personal.mail} onChange={this.handleChange}/>
        </div>
        <div>
          <label>紧急联系人：</label><input name="emergency_contact" type="text" value={personal.emergency_contact} onChange={this.handleChange}/>
        </div>
        <div>
          <label>紧急联系人电话：</label><input name="emergency_contact_tel" type="text" value={personal.emergency_contact_tel} onChange={this.handleChange}/>
        </div>
        <div>
          <label>英语等级：</label><input name="language" type="text" value={personal.language} onChange={this.handleChange}/>
        </div>
        <div>
          <label>预计毕业时间：</label><input name="graduate" type="date" value={personal.graduate} onChange={this.handleChange}/>
        </div>
        <div>
          <button onClick={this.handleSubmit}>提交</button>
          <button className="btn_reset">重置</button>
        </div>
      </div>
    )
  }
}
export default FillResume;
