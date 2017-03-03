import * as React from 'react';

export interface IJourneyDetailsProps extends React.Props<any> {
  startTime: string;
  origin: string;
  destinations: Array<string>;
  setTime(payload: {}): void;
  setOrigin(payload: {}): void;
  setDestination(payload: {}): void;
  addDestination(): void;
  planJourney(): void;
}

export const JourneyDetails = (props: IJourneyDetailsProps) => {

  const renderDestinations = () => {
    return props.destinations.map((destination: string, index: number) => {
      return <input key={index} type='text' value={destination} onChange={e => props.setDestination({destination: e.target.value, index})} />;
    });
  };

  return (
    <div className='journey-details-container'>
      <h3>Journey Details</h3>
      <div className='journey-details-form'>
        <div>
          <label>Start Time</label>
        </div>
        <div>
          <input type='text' onChange={e => props.setTime({ startTime: e.target.value })} />
        </div>
        <div>
          <label>Origin</label>
        </div>
        <div>
          <input type='text' onChange={e => props.setOrigin({origin: e.target.value})} />
        </div>
        <div>
          <label>Destinations</label>
        </div>
        <div>
          {renderDestinations()}
        </div>
        <div>
          <button onClick={() => props.addDestination()}>Add Destination</button>
        </div>
        <div>
          &nbsp;
        </div>
        <div>
          <button onClick={() => props.planJourney()}>Plan Journey</button>
        </div>
      </div>
    </div>
  );
};
