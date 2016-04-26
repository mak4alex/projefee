import React, { Component } from 'react';

export default class TaskInputRow extends Component {

  static defaultProps = {
    task: {
      taskId: 0,
    },
  }

  constructor(props, context) {
    super(props, context);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.update = this.update.bind(this);
  }

  cancelEdit(id) {
    this.props.cancelHandler(id);
  }

  update(id) {
    const task = {
      taskId: id,
      taskTitle: this.refs.taskTitle.value,
      projectTitle: this.refs.projectTitle.value,
      laboriousness: this.refs.laboriousness.value,
      resource: this.refs.resource.value,
      isEdit: false,
    };
    this.props.saveHandler(task, id);
  }

  render() {
    const { task } = this.props;

    return (
      <tr>
        <td>{task.taskId}</td>
        <td>
          <input type="text" defaultValue={task.taskTitle} ref="taskTitle" />
        </td>
        <td>
          <input type="text" defaultValue={task.projectTitle} ref="projectTitle" />
        </td>
        <td>
          <input type="number" defaultValue={task.laboriousness} ref="laboriousness" />
        </td>
        <td>
          <input type="number" defaultValue={task.resource} ref="resource" />
        </td>
        <td>
          <div className="btn-group" role="group">
            <button onClick={() => this.cancelEdit(task.taskId)} className="btn btn-default">
              Cancel
            </button>
            <button onClick={() => this.update(task.taskId)} className="btn btn-primary">
              Save
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
