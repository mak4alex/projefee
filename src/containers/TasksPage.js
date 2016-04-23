import React, { Component } from 'react';
import { connect } from 'react-redux';

class TasksPage extends Component {
  render() {
    return (
      <div>
        <h1>TasksPage</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(TasksPage);
