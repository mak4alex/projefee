import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class TasksPage extends Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired,
  };

  render() {
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
            </tr>
          </thead>
          <tbody>
            {
              this.props.tasks.map(task =>
                (<tr key={task.taskId}>
                  <td>{task.taskId}</td>
                  <td>{task.taskTitle}</td>
                  <td>{task.projectTitle}</td>
                  <td>{task.laboriousness}</td>
                  <td>{task.resource}</td>         
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
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(TasksPage);
