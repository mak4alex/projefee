import React, { Component } from 'react';
import $ from 'jquery';
import _ui from 'jquery-ui';

export default class ReportFilter extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      time: [0, 100],
      resource: [0, 100],
      filterField: 'project',
      filterText: '',
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.changeFilterText = this.changeFilterText.bind(this);
  }


  componentDidMount() {
    $('#time-slider').slider({
      range: true, min: 0, max: 100,
      values: this.state.time,
      slide: (event, ui) => {
        this.setState({ time: ui.values });
      },
    });
    $('#resource-slider').slider({
      range: true, min: 0, max: 100,
      values: this.state.resource,
      slide: (event, ui) => {
        this.setState({ resource: ui.values });
      },
    });
  }

  changeFilter(e) {
    this.setState({ filterField: e.target.value });
  }

  changeFilterText(e) {
    this.setState({ filterText: e.target.value });
  }


  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control" 
              onChange={this.changeFilterText} />
            <span className="input-group-addon">
              <label>
                <input type="radio" name="filterField" defaultValue="project"
                  onChange={this.changeFilter} defaultChecked />
                By Project
              </label>
              {' '}
              <label>
                <input type="radio" name="filterField" defaultValue="task"
                  onChange={this.changeFilter} />
                By Task
              </label>
            </span>
          </div>
        </div>
        <div className="col-sm-3">
          Time: {`${this.state.time[0]} - ${this.state.time[1]}`}
          <div>
            <div id="time-slider"></div>
          </div>
        </div>
        <div className="col-sm-3">
          Resource: {`${this.state.resource[0]} - ${this.state.resource[1]}`}
          <div>
            <div id="resource-slider"></div>
          </div>
        </div>
      </div>
    );
  }

}
