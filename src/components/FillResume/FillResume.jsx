import React from 'react';
import { Link } from 'react-router';
import './index.scss';
import message from '../Public/Message.jsx'

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
      },
      hasSubmit:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(e){
    console.log(e.target.name,e.target.value);
    let personal = JSON.parse(JSON.stringify(this.state.personal));
    personal[e.target.name] = e.target.value;
    this.setState({
      personal : personal
    })
  }
  handleReset(){
    this.setState({
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
      },
      hasSubmit:false,
    })
  }
  handleSubmit(e){
    this.setState({hasSubmit:true});
    // chrome.extension.sendRequest({type: "save",text:this.state}, function(response) {
    //   console.log(response);
    // });
  }
  render() {
    const {personal,hasSubmit} = this.state;
    return(
      <div className="fillResume">
        <p>个人信息</p>
        <div className="mt20">
          <label>姓名：</label>
          <input
            className={hasSubmit&&!personal.name?"failed":''}
            name="name" type="text"
            value={personal.name}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>性别：</label>
          <input
            className={hasSubmit&&!personal.sex?"failed":''}
            name="sex" type="text"
            value={personal.sex}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>出生日期：</label>
          <input
            className={hasSubmit&&!personal.birth?"failed":''}
            name="birth" type="date"
            value={personal.birth}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>证件号码：</label>
          <input
            className={hasSubmit&&!personal.id?"failed":''}
            name="id" type="text"
            value={personal.id}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>手机：</label>
          <input
            className={hasSubmit&&!personal.tel?"failed":''}
            name="tel" type="text"
            value={personal.tel}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>电子邮件：</label>
          <input
            className={hasSubmit&&!personal.mail?"failed":''}
            name="mail" type="text"
            value={personal.mail}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>紧急联系人：</label>
          <input
            className={hasSubmit&&!personal.emergency_contact?"failed":''}
            name="emergency_contact" type="text"
            value={personal.emergency_contact} onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>紧急联系人电话：</label>
          <input
            className={hasSubmit&&!personal.emergency_contact_tel?"failed":''}
            name="emergency_contact_tel" type="text"
            value={personal.emergency_contact_tel}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>英语等级：</label>
          <input
            className={hasSubmit&&!personal.language?"failed":''}
            name="language" type="text"
            value={personal.language}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <label>预计毕业时间：</label>
          <input
            className={hasSubmit&&!personal.graduate?"failed":''}
            name="graduate" type="date"
            value={personal.graduate}
            onChange={this.handleChange}/>
        </div>
        <div className="mt20">
          <button onClick={this.handleSubmit}>提交</button>
          <button className="btn_reset" onClick={this.handleReset}>重置</button>
        </div>
      </div>
    )
  }
}
export default FillResume;
