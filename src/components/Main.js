import React, { Component, PropTypes } from 'react';
import activeComponent from 'react-router-active-component';


export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    const NavLink = activeComponent('li');

    return (
      <div className="container">
        <nav>
          <ul className="nav nav-tabs nav-justified">
            <NavLink to="/reports">Reports</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
