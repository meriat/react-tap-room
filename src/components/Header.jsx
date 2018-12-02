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
        background-color: rgba(255, 228, 25, 0.5);
        padding-top: 0px;
        padding-bottom: 10px;
        font-family: 'Homemade Apple', cursive;
      }
      h1{
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
      .banner {
        background-color: black;
        padding: 10px;
      }
      .foo{
        color:white;
        font-size: 22px;
      }
      .foo:hover{
        color: red;
      }
      `} </style>
      <div className="jumbotron">
        <img src='https://melbournechapter.net/images/beer-tap-clipart-3.png'/>
        <h1>Cocorocco Bar</h1>
      </div>
      <div className='banner'>
        <Link className='btn' to='/'><span className='foo'>
        Home</span></Link> <Link className='btn'to='/newBeer'><span className='foo'>
        Add Beer</span></Link>
      </div>
    </div>
  );
}

export default Header;
