import { Action } from 'redux';
import * as ActionTypes from '../action-types';
import { IJourneyPlannerState } from '../state';

const initialState: IJourneyPlannerState = {
  startTime: '',
  origin: '',
  destinations: ['']
};

export const journeyPlanner = (state: IJourneyPlannerState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_TIME:
      return {
        ...state,
        startTime: action.payload.startTime
      };
    case ActionTypes.SET_ORIGIN:
      return {
        ...state,
        origin: action.payload.origin
      };
    case ActionTypes.SET_DESTINATION:
      return {
        ...state,
        destinations: Object.assign([], state.destinations, { [action.payload.index]: action.payload.destination })
      };
    case ActionTypes.ADD_DESTINATION:
      return {
        ...state,
        destinations: state.destinations.concat([''])
      };
    case ActionTypes.FETCH_JOURNEY:
      return state;
    case ActionTypes.FETCH_JOURNEY_SUCCESS:
      return state;
    case ActionTypes.FETCH_JOURNEY_FAILURE:
      return state;
    default:
      return state;
  }
};
