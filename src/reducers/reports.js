import { ADD_REPORT, REMOVE_REPORT } from './../actions/report';
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
    default:
      return state;
  }
}
