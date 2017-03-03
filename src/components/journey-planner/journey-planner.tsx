import * as React from 'react';

import { JourneyDetails } from './journey-details';
import { Map } from './map';

export interface IJourneyPlannerProps extends React.Props<any> {
  startTime: string;
  origin: string;
  destinations: Array<string>;
  setTime(payload: {}): void;
  setOrigin(payload: {}): void;
  setDestination(payload: {}): void;
  addDestination(): void;
  planJourney(): void;
}

export const JourneyPlanner = (props: IJourneyPlannerProps) => {

  return (
    <div className='journey-planner-container'>
      <JourneyDetails {...props} />
      <Map />
    </div>
  );
};
