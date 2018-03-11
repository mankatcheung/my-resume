import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skill from './components/skill/Skill';
import Interest from './components/interest/Interest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Paper className="App">
          <Sidebar {...this.props.profile}/>
          <div className="App_Content">
            <About {...this.props.profile.about}/>
            <Education {...this.props.education}/>
            <Experience {...this.props.experience}/>
            <Skill {...this.props.skill}/>
            <Interest/>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
