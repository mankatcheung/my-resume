import React, { Component } from 'react';
import './Skill.css';

export default class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        <div className="Skill_TitleWrapper" >
          <img className="Skill_Icon" src="002-mortarboard.svg" />
          <div className="Skill_Title">Skills</div>
        </div>
      </div>
    );
  }
}
