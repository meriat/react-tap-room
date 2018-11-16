import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';
import AddBeerForm from './AddBeerForm';
import EditBeer from './EditBeer';

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
        <Route path='/addBeer' component={AddBeerForm} />
        <Route path='/edit' component={EditBeer} />
      </Switch>
      <hr/>
    </div>
  );
}

export default App;
