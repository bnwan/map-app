import { Observable } from 'rxjs/Observable';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import { JourneyPlannerContainer } from './components/journey-planner';
import './styles/base.scss';

render(
  <Provider store={store}>
    <JourneyPlannerContainer />
  </Provider>,
  document.getElementById('app-container')
);



