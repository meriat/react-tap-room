import React from 'react';
import Header from './Header';
import MarketSceduleList from './MArketScheduleList';
import ProduceList from './ProduceList';

function App(){
  return (
    <div>
      <style global jsx> {`
      body{
        background-color: black;
        color: white;
      }
      `}
      </style>
      <Header/>
      <MarketSceduleList/>
      <ProduceList/>
      <hr/>
    </div>
  );
}

export default App;
