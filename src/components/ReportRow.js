import React, { Component, PropTypes } from 'react';


export default class ReportRow extends Component {

  static propTypes = {
    report: PropTypes.object.isRequired,
  }

  render() {
    const { report } = this.props;
    return (
      <tr>
        <td>{report.id}</td>
        <td>{report.title}</td>
        <td>{report.startDate}</td>
        <td>{report.endDate}</td>
        <td>{report.timeCosts}</td>
        <td>{report.laborCosts}</td>
        <td>{report.projectTitle}</td>
        <td>{report.taskTitle}</td>
      </tr>
    );
  }

}
