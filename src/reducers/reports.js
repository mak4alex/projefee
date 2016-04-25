import { ADD_REPORT, REMOVE_REPORT, UPDATE_REPORT_FILTER } from './../actions/report';
import reportRecords from './../data/reports.json';


const initialState = {
  entities: reportRecords.reports,
  counter: reportRecords.counter,
};

let newReport = null;

export default function reports(state = initialState, action) {
  switch (action.type) {
    case ADD_REPORT:
      newReport = Object.assign({}, action.report, { id: state.counter });
      return Object.assign({},
        { entities: [...state.entities, newReport],
          counter: state.counter + 1 });
    case REMOVE_REPORT:
      return state;
    case UPDATE_REPORT_FILTER:
      return Object.assign({}, state, { filter: action.options });
    default:
      return state;
  }
}
