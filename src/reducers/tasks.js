import taskRecords from './../data/tasks.json';


const initilaState = taskRecords.tasks;


export default function tasks(state = initilaState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
