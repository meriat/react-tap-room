import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
function App(){
  return (
    <div>
    <style global jsx> {`
      body{
        background-color: black;
      }
      `}
    </style>
      <Header/>
      <TicketList/>
      <hr/>
    </div>
  );
}

export default App;
