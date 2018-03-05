import React, { Component } from 'react';
import './Education.css';
import SocialSchool from 'material-ui/svg-icons/social/school';
import Paper from 'material-ui/Paper';

export default class Education extends Component {

  render() {
    return (
      <Paper className="Education">
        <div className="Education_TitleWrapper" >
          <SocialSchool/>
          <div className="Education_Title">Educations</div>
        </div>
        {
          this.props.schools.map(d => 
            <div className='Education_School' key={d.name}>
              <div className='Education_SchoolHeader'>
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
              { d.awards !== null ? 
                (<div className='Education_Awards'>
                  {d.awards.map(award =>
                    <div className='Education_AwardItem'>
                     - {award}
                    </div>
                  )}
                </div>
                )
                : ''
              }
              
            </div>
          )
        }
      </Paper>
    );
  }
}
