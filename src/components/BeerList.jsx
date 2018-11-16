import React from 'react';
import Beer from './Beer';

const state = {
  masterKegList: [
    {
      name: 'Ruby Zozzle',
      brewer: 'Hi-Wheel',
      description: 'Sparkling Wine & Grapefruit',
      abv: '6.8%',
      price: '7',
      remaining: '20'
    },
    {
      name: 'Tart N Juicy',
      brewer: 'Epic',
      description: 'Sour IPA',
      abv: '4.5%',
      price: '6',
      remaining: '60'
    },
    {
      name: 'Hamm\'s',
      brewer: 'Miller/Coors',
      description: 'American Lager',
      abv: '4.7%',
      price: '3',
      remaining: '65'
    },
    {
      name: 'Prismatic',
      brewer: 'Ninkasi',
      description: 'Juicy IPA',
      abv: '5.9%',
      price: '6',
      remaining: '75'
    },
    {
      name: 'Juicy Haze',
      brewer: 'New Belgium',
      description: 'India Pale Ale',
      abv: '7.5%',
      price: '6',
      remaining: '18'
    },
    {
      name: '8 Hop',
      brewer: 'New Belgium',
      description: 'Pale Ale',
      abv: '5.5%',
      price: '6',
      remaining: '58'
    }
  ]
};

function BeerList() {
  return (
    <div className='container'>
    <style jsx>
    {`
    table{
        background-color: rgba(0,0,0,0.6);
        box-shadow: 7px 0 50px 5px white;
        color:white;
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
          </tr>
        </thead>
        <tbody>
          {state.masterKegList.map((keg, index) =>
            <Beer name={keg.name}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              pint={keg.remaining}
              key={index} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BeerList;