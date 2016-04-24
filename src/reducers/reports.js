import { ADD_REPORT, REMOVE_REPORT } from './../actions/report';


const initialState = {
  entities: [
    {
      title: "weqe",
      laborCosts: "36",
      projectTitle: "Project1",
      taskTitle: "Task10",
      date: "2016-12-31",
      startTime: "13:59",
      taskOptionsFilter: "free",
      endTime: "12:59",
      id:1,
    },

  ],
  counter: 2,
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
