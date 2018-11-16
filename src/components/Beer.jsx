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
            <td>{props.pint}</td>
        </tr>
    );
}

export default Beer;