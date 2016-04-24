import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ReportActions from '../actions/report';
import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { Input, Select, RadioGroup } from 'formsy-react-components';
import { Link } from 'react-router';
import _ from 'lodash';


class NewReportPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      laborCosts: 0,
      taskOptions: [],
    };
    this.submitForm = this.submitForm.bind(this);
    this.changeLaborRange = this.changeLaborRange.bind(this);
    this.getProjectOptions = this.getProjectOptions.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.taskFilterOptions = [
      { value: 'all', label: 'All tasks' },
      { value: 'free', label: 'Free tasks' },
    ];
  }


  getProjectOptions() {
    const projectOptions = _.uniqBy(this.props.tasks.map(task => {     
      return {
        value: task.projectTitle,
        label: task.projectTitle,
      };
    }), 'value');
    projectOptions.unshift({ value: '', label: 'Please select…' });
    return projectOptions;
  }

  changeLaborRange(e, v) {
    this.setState({ laborCosts: v });
  }

  filterTasks(e, v = 'all') {
    let projectOptions = _.uniqBy(this.props.tasks, 'taskId');
    if (v === 'free') {
      projectOptions = projectOptions.filter(task => !task.projectId);
    }
    projectOptions = projectOptions.map(task => {
      return {
        value: task.taskTitle,
        label: task.taskTitle,
      };
    });
    projectOptions.unshift({ value: '', label: 'Please select…' });
    this.setState({ taskOptions: projectOptions });
  }

  submitForm(report) {
    console.log(report);
    delete report.laborCostsRange;
    this.props.addReport(report);
    this.resetForm();
  }

  resetForm() {
    const form = this.refs.myform;
    form.reset();
    this.setState({ laborCosts: 0 });
  }

  render() {
    return (
      <div>
        <Formsy.Form onValidSubmit={this.submitForm} ref="myform" validatePristine>
          <fieldset>
              <legend>New Report Form</legend>
              <Input
                name="title" id="title" value="" label="Title"
                type="text" placeholder="Type report title..." required
              />
              <Input name="date" value="" label="Date" type="date" required />
              <Input name="startTime" value="" label="Start time"
                type="time" required
              />
              <Input name="endTime" value="" label="End time"
                type="time" required
              />
              <Input type="text" name="laborCosts" label="Labor costs"
                disabled value={this.state.laborCosts}
              />
              <Input type="range" name="laborCostsRange" label="" value="0"
                min={0} max={100} step={1} onChange={this.changeLaborRange}
              />
              <Select name="projectTitle" label="Project title"
                options={this.getProjectOptions()} required
              />
              <RadioGroup name="taskOptionsFilter" type="inline"
                label="Choose task filter" options={this.taskFilterOptions}
                required onChange={this.filterTasks}
              />
              <Select name="taskTitle" label="Task title"
                options={this.state.taskOptions} required
              />
            </fieldset>
            <div className="btn-group btn-group-lg btn-group-justified" role="group">
              <div className="btn-group" role="group">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              <div className="btn-group" role="group">
                <button type="reset" onClick={this.resetForm} className="btn btn-warning">Reset</button>
              </div>
              <div className="btn-group" role="group">
                <Link to="/" className="btn btn-default">Back</Link>
              </div>
            </div>
        </Formsy.Form>
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    reports: state.reports,
    tasks: state.tasks,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReportActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewReportPage);
