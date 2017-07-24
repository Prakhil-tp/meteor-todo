import React,{Component} from 'react';
import {Resolutions} from '../../imports/api/db.js';
import { render } from 'react-dom';


export default class ResolutionForm extends Component{



  addResolution(event){
    event.preventDefault();
    var text=this.refs.resolution.value.trim();

    Meteor.call('addResolution',text,(error,data)=>{
        if(error){
          
        }

        this.refs.resolution.value="";
    });

  }

    render(){
          return(
                <div>
                <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                    <input
                      type="text"
                      ref="resolution"
                      placeholder="type here.."
                    />
                </form>
                </div>

          )
    }

}
