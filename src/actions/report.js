export const ADD_REPORT = 'ADD_REPORT';
export const REMOVE_REPORT = 'REMOVE_REPORT';
export const UPDATE_REPORT_FILTER = 'UPDATE_REPORT_FILTER';


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


export function updateReportFilter(options) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_REPORT_FILTER,
      options,
    });
  };
}
