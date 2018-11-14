import React from 'react';
import MarketSchedule from './MarketSchedule';

const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function MarketSceduleList() {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Location</th>
            <th>Hours</th>
            <th>Booth</th>
          </tr>
        </thead>
        <tbody>
          {marketSchedule.map((market, index) =>
            <MarketSchedule days={market.day}
              location={market.location}
              hours={market.hours}
              booths={market.booth}
              key={index} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MarketSceduleList;