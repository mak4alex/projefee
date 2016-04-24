import React, { Component } from 'react';
import { connect } from 'react-redux';
import vis from 'vis';


class ListReportPage extends Component {

  componentDidMount() {
    const container = document.getElementById('timeline');
    const mydata = this.props.reports.map(report => {
      return {
        id: report.id,
        content: `#${report.id} ${report.title}`,
        start: report.date,
      };
    });
    const options = {};
 
    new vis.Timeline(container, mydata, options);
  }

  render() {
    return (
      <div>
        <div id="timeline"></div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Labor Costs</th>
              <th>Project Title</th>
              <th>Task Title</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.reports.map(report =>
                (<tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.title}</td>
                  <td>{report.date}</td>
                  <td>{report.startTime}</td>
                  <td>{report.endTime}</td>
                  <td>{report.laborCosts}</td>
                  <td>{report.projectTitle}</td>
                  <td>{report.taskTitle}</td>
                </tr>)
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reports: state.reports.entities,
  };
}

export default connect(mapStateToProps)(ListReportPage);
