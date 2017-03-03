import { Observable } from 'rxjs/Observable';
import { Action, Store } from 'redux';
import { ActionsObservable } from 'redux-observable';
import * as ActionTypes from '../action-types';
import { IAppState } from '../state';
import * as _ from 'lodash';

import loadGoogleMapsAPI from 'load-google-maps-api';

export const fetchJourneyEpic = (action$: ActionsObservable<Action>, store: Store<IAppState>) => {

  let directionsService = null;
  Observable.fromPromise(loadGoogleMapsAPI({ key: 'AIzaSyCyGlQATsM2pOpWGFk3lPdq0Syg5q5c4UM' }))
    .subscribe((googleMapsApi: any) => {
      let directionsService: any = new googleMapsApi.DirectionsService();

    }, (err: any) => {
      console.error(err);
    });

  return action$.ofType(ActionTypes.FETCH_JOURNEY)
    .filter(() => {
      return store.getState().journeyPlanner.origin !== ''
        && store.getState().journeyPlanner.startTime !== ''
        && store.getState().journeyPlanner.destinations.length > 0;
    })
    .map(x => {
      // var request = {
      //   origin: store.getState().journeyPlanner.origin,
      //   destination: store.getState().journeyPlanner.destinations[0],
      //   travelMode: 'DRIVING'
      // };

      // let route = Observable.from(directionsService.route);
      // return route.map((res, status) => {
      //   return res;
      // });
      return x;
    });
};
