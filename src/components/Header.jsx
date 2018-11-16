import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
      color:white;
      text-align: center;
      margin-top: 4%;
      .jumbotron {
        background-color: rgba(235,28,35, 0.4);
        font-family: 'Damion', cursive;
        font-weight: bold;
        font-size:70px;
        color: black;
        text-shadow: 2px 2px 8px white;
      }
      `} </style>
      <h1 className="jumbotron">Cocorocco Bar</h1>
      <Link className='btn btn-secondary' to='/'>Home</Link> | <Link className='btn btn-secondary'to='/beerList'>Beer List</Link>
    </div>
  );
}

export default Header;
