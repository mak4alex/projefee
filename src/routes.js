import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import * as containers from './containers';


const {
  ReportsPage,
  TasksPage,
  NotFoundPage,
  NewReportPage,
  ListReportPage,
} = containers;


export default (
  <Route component={App}>
    <Route path="/" component={ReportsPage} >
      <Route path="/reports" component={ListReportPage} />
      <Route path="/reports/new" component={NewReportPage} />
    </Route>
    <Route path="/tasks" component={TasksPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
