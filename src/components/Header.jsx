import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
      color:white;
      text-align: center;
      margin-top: 8%;
      .jumbotron {
        background-color: rgba(235,28,35, 0.4);
        font-family: 'Damion', cursive;
        font-weight: bold;
        font-size:70px;
        color: #045905;
        text-shadow: 2px 2px 8px white;
      }
      Link {

      }
      `} </style>
      <h1 className="jumbotron">Avery's Organics</h1>
      <Link className='btn btn-secondary' to='/'>Home</Link> | <Link className='btn btn-secondary'to='/months'>Seasonal Availability</Link>
    </div>
  );
}

export default Header;
