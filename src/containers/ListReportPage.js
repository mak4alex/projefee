import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CandlestickChart } from 'react-d3';


class ListReportPage extends Component {



  render() {
    let ohlcData = [
      {
        name: "AAPL",
        values: [
          { x: new Date('2016-10-03'), open: 450, high: 460, low: 440, close: 470 },
          { x: new Date('2015-11-03'), open: 451, high: 453, low: 435, close: 449 },
          { x: new Date('2015-12-03'), open: 451, high: 453, low: 435, close: 449 },
        ]
      }
    ];
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

        <div>
          <CandlestickChart
            data={ohlcData}
            width={1000}
            height={300}
            xAxisTickInterval={{ unit: 'month', interval: 2 }}
            yAxisOffset={-30}
            title="Candlestick Reports Chart"
          />
        </div>
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
