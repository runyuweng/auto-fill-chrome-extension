import React from 'react';

class MainLayout extends React.Component {
  render() {
    return(
        <div>
          <div>
            <h1>hahaha111</h1>
            {this.props.children}
          </div>
        </div>
    )
  }
}
export default MainLayout;
