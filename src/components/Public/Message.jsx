import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './index.scss';

class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: ''}
  }
  componentWillReceiveProps(props){
    this.showMessage();
  }
  componentDidMount(){
    this.showMessage();
  }
  showMessage(){
    this.setState({show: true});
    setTimeout(()=>{
      this.setState({show:false})
    },5000)
  }
  render() {
    const img = {
      success: "./img/success.png",
      failed: "./img/failed.png"
    }
    const { type, word } = this.props;
    const { show } = this.state;
    return(<div>
        {show?<div className='message'>
          <div className='messageContent'>
            <div><img src={img[type]}/></div>
            <div>{word}</div>
          </div>
        </div>:''}
      </div>
    )
  }
}

function message( type, word ){
  ReactDOM.render(
    <Message word = {word} type = {type}/>,
    document.getElementById('message')
  );
}
export default {
  success(word){
    message('success',word);
  },
  failed(word){
    message('failed',word);
  }
};
