import React from 'react';
import PropTypes from 'prop-types';

function ConfirmQuestions(props){
  return (
    <div className='container'>
      <style jsx>
      {`
      .container{
        background-color: rgba(0,0,0,0.7);
        box-shadow: 7px 0 50px 5px white;
        color:#62f442;
        margin-top: 60px;
        text-align: center;
        padding-top: 2.5em;
        padding-bottom: 2.5em;
      }
      `}
      </style>
      <p>Do you want to add a beer?</p>
      <button className='btn btn-success' onClick ={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmQuestions;