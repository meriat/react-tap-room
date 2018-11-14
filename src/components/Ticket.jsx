import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
        .color-toggle {
          background-color: cyan;
        }
        .color-toggle:hover {
          background-color: pink;
        }
        .bg{
          color: red;
        }
        `} </style>
      <h3 className="color-toggle">{props.location} - {props.names}</h3>
      <p className="bg"><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
