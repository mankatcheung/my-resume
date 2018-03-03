import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar {...this.props.profile}/>
        <Content {...this.props.profile}/>
      </div>
    );
  }
}

export default App;
