import React from 'react';
import { Link } from 'react-router';
import './index.scss';

class MainLayout extends React.Component {
  render() {
    return(
        <div className='mainLayout'>
          <header>
            <Link to='/'><img src="./img/back.png"/></Link>
            <span>简历</span>
            <span></span>
          </header>
          <section className="children">
            {this.props.children}
          </section>
        </div>
    )
  }
}
export default MainLayout;
