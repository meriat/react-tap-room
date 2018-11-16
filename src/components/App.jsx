import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';

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
      <Route exact path='/' component={BeerList} />
      </Switch>
      <hr/>
    </div>
  );
}

export default App;
