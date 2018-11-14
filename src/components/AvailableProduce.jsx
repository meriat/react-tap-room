import React from 'react';
import PropTypes from 'prop-types';

function AvailableProduce(props) {
  return (
      <div className="col-md-6">
        <h3>{props.months}</h3>
        <ul>
          {props.selection.map((selection, index) =>
            <li key={index}>
              {selection}
            </li>
          )}
        </ul>
      </div>
  );
}

AvailableProduce.propTypes = {
  months: PropTypes.string,
  selection: PropTypes.string
};

export default AvailableProduce;