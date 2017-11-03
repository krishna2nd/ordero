import React, { Component } from 'react';
import './index.css';
class Content extends Component {
  render() {
    return (
      <main>
        <div className="container" >
          {
            this.props.children
          }
        </div>
      </main>
    );
  }
}

export default Content;