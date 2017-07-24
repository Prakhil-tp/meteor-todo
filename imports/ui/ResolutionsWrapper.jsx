import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Resolutions} from '../api/db.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import TrackerReact from "meteor/ultimatejs:tracker-react";
import ResolutionForm from '../../client/resolutions/ResolutionForm.jsx';
import ResolutionSingle from '../../client/resolutions/ResolutionSingle.jsx';

// App component - represents the whole app

export default class ResolutionsWrapper extends TrackerReact(Component) {

  constructor(){
        super();
        this.state={
            subscription:{
              resolutions:Meteor.subscribe('userResolutions')
            }
        }
      }


  componentWillUnmount(){
    this.state.subscription.resolutions.stop();
  }

  resolutions(){
    return Resolutions.find().fetch();
  }


 render(){
    let res=this.resolutions();



      return(
              <div>
                  <h3 className='with-half'>Todos - {Session.get('test')}</h3>
                  <ResolutionForm />

                  <ul>
                  {this.resolutions().map((resolution)=>{
                    return  <ResolutionSingle key={resolution._id} resolution={resolution} />
                  })}

                  </ul>
              </div>

            )


  }
}
