import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="Content_Educations">
          <div className="Content_SectionTitleWrapper" >
            <img className="Content_Icon" src="002-mortarboard.svg" />
            <div className="Content_Title">Educations</div>
          </div>
        </div>
        <div className="Content_Experiences">
          <div className="Content_SectionTitleWrapper" >
            <img className="Content_Icon" src="004-work-briefcase.svg" />
            <div className="Content_Title">Experiences</div>
          </div>
        </div>
        <div className="Content_Skills">
          <div className="Content_SectionTitleWrapper" >
            <img className="Content_Icon" src="001-tool.svg" />
            <div className="Content_Title">Skills</div>
          </div>
        </div>
      </div>
    );
  }
}
