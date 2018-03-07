import React, { Component } from 'react';
import './Interest.css';
import Paper from 'material-ui/Paper';
import ActionBuild from 'material-ui/svg-icons/action/build';

export default class Interest extends Component {

  render() {
    return (
      <Paper className="Interest">
        <div className="Interest_TitleWrapper" >
          <ActionBuild />
          <div className="Interest_Title">Interest</div>
        </div>
        <div className='Interest_About'>
        I'm a travel lover. The following map shows the countries that I've been!
        </div>
        <div className='Interest_Map'>
          <a href="https://www.adventureally.com/my-map-of-countries-visited?id=201803075a9fd402c4dd66.23066969">
            <img src="https://s1.adventureally.com/dc/maps/2018/03/07/201803075a9fd402c4dd66.23066969.png"/>
          </a>
        </div>
      </Paper>
    );
  }
}