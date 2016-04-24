import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import reports from './reports';
import tasks from './tasks';


const rootReducer = combineReducers({
  reports,
  tasks,
  routing,
});


export default rootReducer;
