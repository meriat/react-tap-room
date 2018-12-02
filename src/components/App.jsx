import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import EditBeer from './EditBeer';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <style global jsx> {`
      body{
        background-image: url('https://bestscreenwallpaper.pro/wp-content/uploads/2013/09/Beer-wallpapers-Free-picture-Multi-cap.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Josefin Sans', sans-serif;
      }
      `}
      </style>
      <Header/>
      <Switch> 
        <Route exact path='/' component={BeerList} />
        <Route path='/newBeer' component={NewBeerControl} />
        <Route path='/edit' component={EditBeer} />
        <Route component= {Error404} />
      </Switch>
      <hr/>
    </div>
  );
}

export default App;
