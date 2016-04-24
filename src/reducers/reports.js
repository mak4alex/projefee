import { ADD_REPORT, REMOVE_REPORT } from './../actions/report';


const initialState = {
  entities: [
    {
      title: "ProjX",
      laborCosts: "86",
      timeCosts: "26",
      projectTitle: "Project1",
      taskTitle: "Task10",
      startDate: "2015-04-06",
      endDate: "2015-05-06",
      id: 1,
    },
    {
      title: "Proj1",
      laborCosts: "36",
      timeCosts: "16",
      projectTitle: "Project2",
      taskTitle: "Task11",
      startDate: "2015-04-10",
      endDate: "2015-04-16",
      id: 2,
    },
  ],
  counter: 3,
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
