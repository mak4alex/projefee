import React, { Component } from 'react';


export default class TaskRow extends Component {

  constructor(props, context) {
    super(props, context);
    this.setEdit = this.setEdit.bind(this);
    this.remove = this.remove.bind(this);
  }

  setEdit(id) {
    this.props.setEditTask(id);
  }

  remove(id) {
    this.props.deleteTask(id);
  }

  render() {
    const { task } = this.props;

    return (
      <tr>
        <td>{task.taskId}</td>
        <td>{task.taskTitle}</td>
        <td>{task.projectTitle}</td>
        <td>{task.laboriousness}</td>
        <td>{task.resource}</td>
        <td>
          <div className="btn-group" role="group">
            <button onClick={() => this.setEdit(task.taskId)} className="btn btn-warning">
              Edit
            </button>
            <button onClick={() => this.remove(task.taskId)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }

}
