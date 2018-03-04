import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skill from './components/skill/Skill';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar {...this.props.profile}/>
        <div className="App_Content">
          <Education {...this.props.education}/>
          <Experience {...this.props.experience}/>
          <Skill {...this.props.skill}/>
        </div>
      </div>
    );
  }
}

export default App;
