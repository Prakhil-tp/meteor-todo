import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Resolutions = new Mongo.Collection("resolutions");
