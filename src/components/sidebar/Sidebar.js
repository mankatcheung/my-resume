import React, { Component } from 'react';
import './Sidebar.css';
import Avatar from 'material-ui/Avatar';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Avatar src='jeff-avatar.png' size={180} />
        <div className="Sidebar_Name">{this.props.name}</div>
        <div className="Sidebar_Title">{this.props.title}</div>
        <div className="Sidebar_Mail">{this.props.mail}</div>
        <div className="Sidebar_Title">{this.props.title}</div>
      </div>
    );
  }
}
