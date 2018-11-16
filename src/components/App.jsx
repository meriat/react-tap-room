import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style global jsx> {`
      body{
        
      }
      `}
      </style>
      <Header/>
        <Switch>
          {/* <Route exact path='/' component={MarketSceduleList} /> */}
        </Switch>
      <hr/>
    </div>
  );
}

export default App;
