import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './Skill.css';
import ActionBuild from 'material-ui/svg-icons/action/build';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class Skill extends Component {

  render() {
    return (
      <div className="Skill">
        <div className="Skill_TitleWrapper" >
          <ActionBuild />
          <div className="Skill_Title">Skills</div>
        </div>
        <div style={styles.wrapper}>
        {
          this.props.list.map( s =>
            <Chip style={styles.chip}>{s}</Chip>
          )
        }
        </div>
      </div>
    );
  }
}
