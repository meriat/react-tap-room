import React from 'react';
import Header from './Header';
import MarketSceduleList from './MArketScheduleList';
function App(){
  return (
    <div>
      <style global jsx> {`
      body{
        background-color: pink;
      }
      `}
      </style>
      <Header/>
      <MarketSceduleList/>
      <hr/>
    </div>
  );
}

export default App;
