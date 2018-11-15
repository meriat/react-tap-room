import React from 'react';
import Header from './Header';
import MarketSceduleList from './MArketScheduleList';
import ProduceList from './ProduceList';
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/' component={MarketSceduleList} />
          <Route path='/months' component={ProduceList} />
        </Switch>
      <hr/>
    </div>
  );
}

export default App;
