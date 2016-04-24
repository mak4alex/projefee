import React, { Component } from 'react';
import { connect } from 'react-redux';



class ListReportPage extends Component {



  render() {
 
    return (
      <div>
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
