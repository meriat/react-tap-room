import React from 'react';

function Header(){
  return (
    <div>
      <style jsx>{`
      color:white;
      text-align: center;
      margin-top: 8%;
      .jumbotron {
        background-color: rgba(235,28,35, 0.5);
        font-family: 'Damion', cursive;
        font-weight: bold;
        font-size:70px;
        color: #045905;
      }
      `} </style>
      <h1 className="jumbotron">Avery's Organics</h1>
    </div>
  );
}

export default Header;
