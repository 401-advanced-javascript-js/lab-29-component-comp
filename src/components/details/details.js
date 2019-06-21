/* eslint-disable react/prop-types */
import React from 'react';

export default class Details extends React.Component {
  render() {
    return (
      <div>
        <h2>Story Details:</h2>
        {this.props.children}
      </div>
    );
  }
}
