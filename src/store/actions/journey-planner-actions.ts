import * as ActionTypes from '../action-types';

export const setTime = (payload: {}) => ({
  type: ActionTypes.SET_TIME,
  payload
});

export const setOrigin = (payload: {}) => ({
  type: ActionTypes.SET_ORIGIN,
  payload
});

export const setDestination = (payload: {}) => ({
  type: ActionTypes.SET_DESTINATION,
  payload
});

export const addDestination = () => ({
  type: ActionTypes.ADD_DESTINATION
});

export const fetchJourney = () => ({
  type: ActionTypes.FETCH_JOURNEY
});

