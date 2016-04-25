import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReportTable from './../components/ReportTable';
import ReportTimeLine from './../components/ReportTimeLine';
import ReportFilter from './../components/ReportFilter';


class ListReportPage extends Component {

  render() {
    const { reports } = this.props;
    return (
      <div>
        <ReportTimeLine reports={reports} />
        <ReportFilter />
        <ReportTable reports={reports} />
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
