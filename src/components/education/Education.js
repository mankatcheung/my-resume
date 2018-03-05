import React, { Component } from 'react';
import './Education.css';

export default class Education extends Component {

  render() {
    return (
      <div className="Education">
        <div className="Education_TitleWrapper" >
          <img className="Education_Icon" src="002-mortarboard.svg" />
          <div className="Education_Title">Educations</div>
        </div>
        {
          this.props.schools.map(d => 
            <div className='Education_School' key={d.name}>
              <div className='Education_SchoolNameProgramWrapper'>
                <div className='Education_SchoolName'>
                {d.name}
                </div>
                <div className='Education_SchoolProgram'>
                {d.program}
                </div>
              </div>
              <div className='Education_SchoolDate'>
                {d.begin} - {d.end}
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
