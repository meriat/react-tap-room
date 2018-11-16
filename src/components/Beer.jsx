import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Beer(props) {
  const ButtonStyle = {
    button: {
      backgroundColor: '#0044cc',
      color: 'white',
    },
    edit: {
      backgroundColor: '#e6005c',
      color: 'white'
    }
  };
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.brewer}</td>
      <td>{props.description}</td>
      <td>{props.abv}</td>
      <td>{props.price}</td>
      <td><button className='btn' style={ButtonStyle.button}>{props.pint}</button></td>
      <td><Link to='/edit'><button className='btn' style={ButtonStyle.edit}>Edit</button></Link></td>
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