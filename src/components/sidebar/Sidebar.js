import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <img className="Sidebar_Avatar" src="jeff-avatar.png" />
        <div className="Sidebar_Name">{this.props.name}</div>
        <div className="Sidebar_Title">{this.props.title}</div>
        <div className="Sidebar_Mail">{this.props.mail}</div>
        <div className="Sidebar_Title">{this.props.title}</div>
      </div>
    );
  }
}
