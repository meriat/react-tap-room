import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';

function App(){
  return (
    <div>
      <style global jsx> {`
      body{
        background-image: url('https://bestscreenwallpaper.pro/wp-content/uploads/2013/09/Beer-wallpapers-Free-picture-Multi-cap.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;

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
