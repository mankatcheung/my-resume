import React, { Component } from 'react';
import './Sidebar.css';
import Avatar from 'material-ui/Avatar';
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import CommunicationCall from 'material-ui/svg-icons/communication/call'

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
            <div className='Sidebar_ContactItem'> {this.props.mail} </div>
          </div>
          <div className="Sidebar_ContactItemWrapper">
            <CommunicationCall /> 
            <div className='Sidebar_ContactItem'> {this.props.phoneNumber} </div>
          </div>
        </div>
      </div>
    );
  }
}
