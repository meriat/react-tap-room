import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import EditBeer from './EditBeer';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      reducePint: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleReducingPint = this.handleReducingPint.bind(this);
  }

  handleAddingNewBeerToList(newBeer) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newBeer);
    this.setState({masterKegList: newMasterKegList});
  }

  handleReducingPint(keg) {
    this.setState({reducePint: keg});
    alert(this.state.reducePint.keg -1);
  }

  render(){
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
          <Route exact path='/' render={()=> <BeerList beerList = {this.state.masterKegList} onReducingPint = {this.state.handleReducingPint} />} />
          <Route path='/newBeer' render={()=> <NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList}/>} />
          <Route path='/edit' component={EditBeer} />
          <Route component= {Error404} />
        </Switch>
        <hr/>
      </div>
    );
  }
  
}

export default App;
