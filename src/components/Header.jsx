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
        background-color: rgba(207,201,165, 0.5);
        padding-top: 0px;
        padding-bottom: 10px;
      }
      h1{
        font-family: 'Damion', cursive;
        font-weight: bold;
        font-size:60px;
        color: black;
        text-shadow: 2px 2px 8px white;
        padding-top: 0px;
        margin: 0px;
      }
      img{
        width: 8%;        
      }
      `} </style>
      <div className="jumbotron">
      <img src='https://melbournechapter.net/images/beer-tap-clipart-3.png'/>
      <h1>Cocorocco Bar</h1>
      </div>
      <Link className='btn btn-secondary' to='/'>Home</Link> | <Link className='btn btn-secondary'to='/addBeer'>Add Beer</Link>
    </div>
  );
}

export default Header;
