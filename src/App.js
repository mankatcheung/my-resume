import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skill from './components/skill/Skill';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Sidebar {...this.props.profile}/>
          <div className="App_Content">
            <Education {...this.props.education}/>
            <Experience {...this.props.experience}/>
            <Skill {...this.props.skill}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
