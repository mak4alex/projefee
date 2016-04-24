import React, { Component, PropTypes } from 'react';
import ReportRow from './ReportRow';


export default class ReportTable extends Component {

  static propTypes = {
    reports: PropTypes.array.isRequired,
  }

  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Time Costs</th>
            <th>Labor Costs</th>
            <th>Project Title</th>
            <th>Task Title</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.reports.map(report =>
              (<ReportRow key={report.id} report={report} />)
            )
          }
        </tbody>
      </table>
    );
  }

}
