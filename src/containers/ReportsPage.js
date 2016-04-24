import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ReportsPage extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <div className="row">
          <h1>Reports
            <Link to="/reports/new" className="btn btn-primary btn-lg pull-right">
              New Report
            </Link>
          </h1>
        </div>
        { this.props.children }
      </div>
    );
  }

}

export default connect()(ReportsPage);
