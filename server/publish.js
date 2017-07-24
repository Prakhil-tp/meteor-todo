import {Resolutions} from '../imports/api/db.js';

Meteor.publish('allResolutions',function() {
    return Resolutions.find();
});

Meteor.publish('userResolutions',function() {
    return Resolutions.find({user:this.userId});
});
