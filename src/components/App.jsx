import React from 'react';
import Header from './Header';
import MarketSceduleList from './MArketScheduleList';
import ProduceList from './ProduceList';

function App(){
  return (
    <div>
      <style global jsx> {`
      body{
        background-image: url('http://www.pptgrounds.com/wp-content/uploads/2018/01/Healthy-Food-Vegetables-Slide.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Fira Mono', monospace;
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
