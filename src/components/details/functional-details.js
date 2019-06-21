/* eslint-disable react/prop-types */
import React from 'react';

export default function functionalDetails(props) {
  return (
    <div>
      <h4>Story Details (Functional)</h4>
      {props.children}
    </div>
  );
}
