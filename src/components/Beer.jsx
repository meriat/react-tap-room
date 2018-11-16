import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return(
    // <div className='row'>
    //   <style jsx>
    //     {`
    //       .btn{
    //           padding: 0;
    //       }
    //       .row{
    //           display: inline-block;
    //       }
    //       `}
    //   </style>

      <tr>
        <td>{props.name}</td>
        <td>{props.brewer}</td>
        <td>{props.description}</td>
        <td>{props.abv}</td>
        <td>{props.price}</td>
        <button className='pintbtn' className='btn'><td>{props.pint}</td></button>
      </tr>
// </div>
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