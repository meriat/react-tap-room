import React from 'react';
import PropTypes from 'prop-types';

function MarketScedule(props) {
  return (
    <tr>

      <td>{props.days}</td>
      <td>{props.location}</td>
      <td>{props.hours}</td>
      <td>{props.booths}</td>
    </tr>
  );
}

MarketScedule.propTypes = {
  days: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booths: PropTypes.string
};

export default MarketScedule;