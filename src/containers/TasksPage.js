import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TaskRow from './../components/TaskRow';
import TaskInputRow from './../components/TaskInputRow';
import { bindActionCreators } from 'redux';
import * as TaskActions from './../actions/task';


class TasksPage extends Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired,
  };

  render() {
    const { tasks, ...others } = this.props;

    return (
      <div>
        <h1>TasksPage</h1>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Task Title</th>
              <th>Project Title</th>
              <th>Laboriousness</th>
              <th>Resources</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map(task =>
                task.isEdit ?
                  (<TaskInputRow key={task.taskId} task={task} {...others} />) :
                  (<TaskRow key={task.taskId} task={task} {...others} />)
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
    tasks: state.tasks,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(TaskActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
