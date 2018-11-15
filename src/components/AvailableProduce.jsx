import React from 'react';
import PropTypes from 'prop-types';

function AvailableProduce(props) {
  return (
    <div className="col-md-12">
      <style jsx> {`
    .card-header{
        text-align: center;
        font-size: 25px;
    }
    .card{
        margin-bottom: 5%;
        background-color: rgba(255,239,124, 0.7);
    }
    li{
        list-style: none;
        float: left;
    }
    .card-body{
        font-weight: bold;
    }
    `}
      </style>
      <div className="card">
        <div className="card-header">
          <b>{props.months}</b>
        </div>
        <div className="card-body align-items-center d-flex justify-content-center">
          <ul>
            {props.selection.map((selection, index) =>
              <li key={index}>
                {selection}&nbsp;&nbsp;
              </li>
            )}
          </ul>
        </div>
      </div>    
    </div>
  );
}

AvailableProduce.propTypes = {
  months: PropTypes.string,
  selection: PropTypes.string
};

export default AvailableProduce;