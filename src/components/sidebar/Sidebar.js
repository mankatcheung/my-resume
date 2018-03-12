import React, { Component } from 'react';
import './Sidebar.css';
import Avatar from 'material-ui/Avatar';
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Linkify from 'react-linkify';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <div className='Sidebar_Header'>
          <Avatar src='jeff-avatar.png' size={180} />
          <div className="Sidebar_Name">{this.props.name}</div>
          <div className="Sidebar_Title">{this.props.title}</div>
        </div>
        <div className="Sidebar_Contact">
          <div className="Sidebar_ContactItemWrapper">
            <CommunicationEmail /> 
            <Linkify className='Sidebar_ContactItem'> {this.props.mail} </Linkify>
          </div>
          <div className="Sidebar_ContactItemWrapper">
            <CommunicationCall /> 
            <div className='Sidebar_ContactItem'> {this.props.phoneNumber} </div>
          </div>
          <div className="Sidebar_ContactItemWrapper">
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            <Linkify className='Sidebar_ContactItem'> {this.props.github} </Linkify>
          </div>
          <div className="Sidebar_ContactItemWrapper">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
            <Linkify className='Sidebar_ContactItem'> {this.props.linkedin} </Linkify>
          </div>
          <div className="Sidebar_Language">
            <div className="Sidebar_LanguageTitle">Languages: </div>
            <div className="Sidebar_LanguageItem">
              {
                this.props.languages.map((lang, index) =>
                  <div key={index}>{lang.name} ({lang.level})</div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
