import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
    const ButtonStyle = {
        button: {
            backgroundColor: '#0044cc',
            color: 'white',
        }
    }
  return(
      <tr>
        <td>{props.name}</td>
        <td>{props.brewer}</td>
        <td>{props.description}</td>
        <td>{props.abv}</td>
        <td>{props.price}</td>
        <td><button className='btn' style={ButtonStyle.button}>{props.pint}</button></td>
        <td><button className='btn' style={ButtonStyle.button}>Edit</button></td>
      </tr>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  pint: PropTypes.string
};

export default Beer;