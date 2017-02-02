import { combineReducers } from 'redux';
import menuDrawerReducer from '../modules/MenuDrawerWide/MenuDrawerState';
import rest from '../services/rest';
import { routerReducer } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // Menu drawer state
  drawer: menuDrawerReducer,

  // Routing state
  routing: routerReducer,

  // Internationalization state (TODO!)
  intl: intlReducer,

  // Redux Form
  form: formReducer,

  // REST API
  ...rest.reducers,
}

export default combineReducers(reducers);
