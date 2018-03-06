import React, { Component } from 'react';
import './Experience.css';
import ActionWork from 'material-ui/svg-icons/action/work';
import Paper from 'material-ui/Paper';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Experience extends Component {
  render() {
    return (
      <Paper className="Experience">
        <div className="Experience_TitleWrapper" >
          <ActionWork />
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
                  company.projects.reverse().map(project => 
                    <div className='Experience_Project'>
                      <div className='Experience_ProjectHeader'>
                        <div className='Experience_ProjectName'>{project.name}</div>
                        <div className='Experience_ProjectDate'>{project.begin} - {project.end}</div>
                      </div>
                      <div className='Experience_ProjectComments'>
                        {
                          project.comments.map(c => 
                            <div className='Experience_Comment'>
                            - {c}
                            </div>
                          )
                        }
                        <div className='Experience_Links'>
                          {
                            (project.hasOwnProperty('links') && project.links.hasOwnProperty('ios')) ?
                              (<a href={project.links.ios}>
                                <img className='Experience_AppStore' src='app-store-ios.png' />
                              </a>)
                              :'' 
                          }
                          {
                            (project.hasOwnProperty('links') && project.links.hasOwnProperty('android')) ?
                              (<a href={project.links.android}>
                                <img className='Experience_AppStore' src='google-play-badge.png'/>
                              </a>)
                              : ''
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
      </Paper>
    );
  }
}
