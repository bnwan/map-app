import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Observable } from 'rxjs/Observable';

import { JourneyPlanner } from './journey-planner';
import { setTime, setOrigin, setDestination, addDestination, fetchJourney } from '../../store/actions/journey-planner-actions';

import { IAppState } from '../../store/state';

import './style.scss';

const mapStateToProps = (state: IAppState) => {
  return {
    startTime: state.journeyPlanner.startTime,
    origin: state.journeyPlanner.origin,
    destinations: state.journeyPlanner.destinations
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
  return {
    setTime: (payload: {}) => dispatch(setTime(payload)),
    setOrigin: (payload: {}) => dispatch(setOrigin(payload)),
    setDestination: (payload: {}) => dispatch(setDestination(payload)),
    addDestination: () => dispatch(addDestination()),
    planJourney: () => dispatch(fetchJourney())
  };
};

export const JourneyPlannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JourneyPlanner);
