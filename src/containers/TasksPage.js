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

  constructor(props, context) {
    super(props, context);
    this.state = {
      isFromVisible: false,
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ isFromVisible: true });
  }

  hideForm() {
    this.setState({ isFromVisible: false });
  }

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
                  (<TaskInputRow key={task.taskId} task={task}
                    saveHandler={this.props.updateTask}
                    cancelHandler={this.props.cancelEditTask} />) :
                  (<TaskRow key={task.taskId} task={task} {...others} />)
              )
            }
            {
              this.state.isFromVisible ?
                (<TaskInputRow
                  saveHandler={this.props.saveNewTask}
                  cancelHandler={this.hideForm} />) : (<tr></tr>)
            }
          </tbody>
        </table>
        <div className="row">
          <div className="col-xs-offset-10 col-xs-2">
            {
              !this.state.isFromVisible ?
                (<button className="btn btn-primary btn-block"
                  onClick={this.showForm}>Add task</button>) : ('')
            }
          </div>
        </div>
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
