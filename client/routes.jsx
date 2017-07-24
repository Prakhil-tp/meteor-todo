import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from '../imports/ui/ResolutionsWrapper.jsx';
import Student from '../imports/ui/Student.jsx';
import About from '../imports/ui/About.jsx';

FlowRouter.route('/',{
action(){
  mount(MainLayout,{
    content:(<ResolutionsWrapper />)
    });
  }
});

FlowRouter.route('/student',{
  action(){
    mount(MainLayout,{
      content:(<Student />)
    });
  }
});

FlowRouter.route('/about',{
  action(){
    mount(MainLayout,{
      content:(<About />)
    });
  }
});
