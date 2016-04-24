import React, { Component, PropTypes } from 'react';
import vis from 'vis';


export default class ReportTimeLine extends Component {

  static propTypes = {
    reports: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const container = document.getElementById('timeline');
    const mydata = this.props.reports.map(report => {
      return {
        id: report.id,
        content: `#${report.id} ${report.title}`,
        start: report.startDate,
        end: report.endDate,
      };
    });
    const options = {};

    new vis.Timeline(container, mydata, options);
  }

  render() {
    return (
      <div id="timeline"></div>
    );
  }

}
