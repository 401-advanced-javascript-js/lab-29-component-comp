/* eslint-disable react/prop-types */
import React from 'react';

export default class Details extends React.Component {
  render() {
    return (
      <div>
        <h4>Story Details (Class)</h4>
        {this.props.children}
      </div>
    );
  }
}
