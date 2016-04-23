import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';


const {
  CounterPage,
  TasksPage,
  NotFoundPage,  
} = containers;


export default (
  <Route component={App}>
    <Route path="/" component={CounterPage} />
    <Route path="/tasks" component={TasksPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
