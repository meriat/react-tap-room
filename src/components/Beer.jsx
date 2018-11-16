import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.brewer}</td>
            <td>{props.description}</td>
            <td>{props.abv}</td>
            <td>{props.price}</td>
            <button className='btn btn-success'><td>{props.pint}</td></button>
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