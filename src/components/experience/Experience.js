import React, { Component } from 'react';
import './Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="Experience_TitleWrapper" >
          <img className="Experience_Icon" src="002-mortarboard.svg" />
          <div className="Experience_Title">Experiences</div>
        </div>
        {
          this.props.companies.map(company => 
            <div className='Experience_Company' key={company.name}>
              <div className='Experience_CompanyHeader'>
                <div className='Experience_CompanyNameTitleWrapper'>
                  <div className='Experience_CompanyJobTitle'>{company.jobTitle}</div>
                  <div className='Experience_CompanyName'>{company.name}</div>
                </div>
                <div className='Experience_CompanyDate'>
                  {company.begin} - {company.end}
                </div>
              </div>
              <div className='Experience_ProjectContainer'>
                {
                  company.projects.map(project => 
                  <div className='Experience_Project'>
                    <div className='Experience_ProjectHeader'>
                      <div className='Experience_ProjectName'>{project.name}</div>
                      <div className='Experience_ProjectDate'>{project.begin} - {project.end}</div>
                    </div>
                    {/* <div className='Experience_ProjectComment'>{project.comment}</div> */}
                  </div>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
