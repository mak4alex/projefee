import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReportTable from './../components/ReportTable';
import ReportTimeLine from './../components/ReportTimeLine';
import ReportFilter from './../components/ReportFilter';
import { updateReportFilter } from './../actions/report';


class ListReportPage extends Component {

  render() {
    const { reports } = this.props;
    return (
      <div>
        <ReportTimeLine reports={reports} />
        <ReportFilter updateFilter={this.props.updateReportFilter} />
        <ReportTable reports={reports} />
      </div>
    );
  }

}

function filterReports(reports, options) {
  console.log(options);
  if (options) {
    return reports.filter(report => {
      const filterField =
        options.filterField === 'project' ? report.projectTitle : report.taskTitle;

      return (filterField.includes(options.filterText) &&
        (options.time[0] <= report.timeCosts && report.timeCosts <= options.time[1]) &&
        (options.labor[0] <= report.laborCosts && report.laborCosts <= options.labor[1]));
    });
  }
  return reports;
}

function mapStateToProps(state) {
  return {
    reports: filterReports(state.reports.entities, state.reports.filter),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateReportFilter,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListReportPage);
