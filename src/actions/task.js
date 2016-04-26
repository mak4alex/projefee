export const SET_EDIT_TASK = 'SET_EDIT_TASK';
export const CANCEL_EDIT_TASK = 'CANCEL_EDIT_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SAVE_NEW_TASK = 'SAVE_NEW_TASK';


export function saveNewTask(task) {
  return (dispatch) => {
    dispatch({
      type: SAVE_NEW_TASK,
      task,
    });
  };
}


export function setEditTask(id) {
  return (dispatch) => {
    dispatch({
      type: SET_EDIT_TASK,
      id,
    });
  };
}


export function cancelEditTask(id) {
  return (dispatch) => {
    dispatch({
      type: CANCEL_EDIT_TASK,
      id,
    });
  };
}


export function updateTask(task, id) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TASK,
      id,
      task,
    });
  };
}


export function deleteTask(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_TASK,
      id,
    });
  };
}
