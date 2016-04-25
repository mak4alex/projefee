import React, { Component } from 'react';
import $ from 'jquery';
import _ui from 'jquery-ui';
import _ from 'lodash';


export default class ReportFilter extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      time: [0, 100],
      labor: [0, 100],
      filterField: 'project',
      filterText: '',
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.changeFilterText = this.changeFilterText.bind(this);
  }

  componentWillUpdate(props, state) {
    if (!_.eq(state, this.state)) {
      this.props.updateFilter(state);
    }
  }

  componentDidMount() {
    $('#time-slider').slider({
      range: true, min: 0, max: 100,
      values: this.state.time,
      slide: (event, ui) => {
        this.setState({ time: ui.values });
      },
    });
    $('#labor-slider').slider({
      range: true, min: 0, max: 100,
      values: this.state.labor,
      slide: (event, ui) => {
        this.setState({ labor: ui.values });
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
          Labor: {`${this.state.labor[0]} - ${this.state.labor[1]}`}
          <div>
            <div id="labor-slider"></div>
          </div>
        </div>
      </div>
    );
  }

}
