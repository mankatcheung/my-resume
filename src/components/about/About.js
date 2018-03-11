import React, { Component } from 'react';
import './About.css';
import ActionBuild from 'material-ui/svg-icons/action/build';
import Paper from 'material-ui/Paper';


export default class About extends Component {

  render() {
    return (
      <Paper className="About">
        <div className="About_TitleWrapper" >
          <ActionBuild />
          <div className="About_Title">About</div>
        </div>
        <div className="About_Content">
        {this.props.text}
        </div>
      </Paper>
    );
  }
}
