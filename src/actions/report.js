export const ADD_REPORT = 'ADD_REPORT';
export const REMOVE_REPORT = 'REMOVE_REPORT';


export function addReport(report) {
  return (dispatch) => {
    dispatch({
      type: ADD_REPORT,
      report,
    });
  };
}


export function removeReport(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_REPORT,
      id,
    });
  };
}
