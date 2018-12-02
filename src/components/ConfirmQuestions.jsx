import React from 'react';
import PropTypes from 'prop-types';

function ConfirmQuestions(props){
  return (
    <div>
      <p>Do you want to add a beer?</p>
      <button className='btn btn-success' onClick ={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmQuestions;