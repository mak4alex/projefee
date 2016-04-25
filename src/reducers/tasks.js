import taskRecords from './../data/tasks.json';
import { SET_EDIT_TASK, CANCEL_EDIT_TASK, UPDATE_TASK,
         DELETE_TASK } from './../actions/task';


const initilaState = taskRecords.tasks
  .map(task => Object.assign({}, task, { isEdit: false }));


export default function tasks(state = initilaState, action) {
  switch (action.type) {
    case SET_EDIT_TASK:
      return state.map(task => {
        if (task.taskId === action.id) {
          return Object.assign({}, task, { isEdit: true });
        }
        return task;
      });
    case CANCEL_EDIT_TASK:
      return state.map(task => {
        if (task.taskId === action.id) {
          return Object.assign({}, task, { isEdit: false });
        }
        return task;
      });
    case UPDATE_TASK:
      return state.map(task => {
        if (task.taskId === action.id) {
          return Object.assign({}, action.task, { isEdit: false });
        }
        return task;
      });
    case DELETE_TASK:
      return state.filter(task => task.taskId !== action.id);
    default:
      return state;
  }
}
