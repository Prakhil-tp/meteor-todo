import React,{Component} from 'react';
import {render} from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class ResolutionSingle extends Component {
  toggleChange(){
      Meteor.call('toggleResolution',this.props.resolution);

  }
  removedata(){
    Meteor.call('removeResolution',this.props.resolution);
  }

  render(){
    const resolutionClass = this.props.resolution.complete ? "rise-up":"dim-light";
    const status = this.props.resolution.complete ? "" : <span className="completed">completed</span>;
    return(
        <li className={resolutionClass}>
            <input
                type='checkbox'
                readOnly={true}
                checked={this.props.resolution.complete}
                onClick={this.toggleChange.bind(this)}
            />
            {this.props.resolution.text} -
            {status}
            <button className="btn-cancel"
                    onClick={this.removedata.bind(this)}
            >&times;</button>
        </li>
    )
  }

}
