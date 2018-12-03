import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

var masterKegList= [
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    pint: '20'
  },
  {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    pint: '60'
  },
  {
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    pint: '65'
  },
  {
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv: '5.9%',
    price: '6',
    pint: '75'
  },
  {
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv: '7.5%',
    price: '6',
    pint: '18'
  },
  {
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv: '5.5%',
    price: '6',
    pint: '58'
  }
];


function BeerList(props) {
  return (
    <div className='container'>
      <style jsx>
        {`
    table{
        background-color: rgba(0,0,0,0.7);
        box-shadow: 7px 0 50px 5px white;
        color:#62f442;
        margin-top: 30px;
    }
    th{
        font-weight: bold;
        font-size: 30px;
    }
    tbody{
        font-weight: bold;
        font-size: 18px;
    }

    `}
      </style>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brewer</th>
            <th>Description</th>
            <th>ABV</th>
            <th>Price</th>
            <th>Pint</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {masterKegList.map((keg) =>
            <Beer name={keg.name}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              pint={keg.pint}
              onReducingPint={props.onReducingPint}
              key={keg.id} />
          )}
          {props.beerList.map((keg) =>
            <Beer name={keg.name}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              pint={keg.pint}
              onReducingPint={props.onReducingPint}
              key={keg.id} />
          )}
        </tbody>
      </table>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onReducingPint: PropTypes.func
};

export default BeerList;