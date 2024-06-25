import * as actions from './actions';
import { combineReducers } from 'redux';

const preferences = (state = { darkThemeEnable: false }, action) => {
  switch (action.type) {
    case action.TOGGLE_DARKTHEME:
      return {
        ...state,
        darkThemeEnable: !state.darkThemeEnable,
      };
    default:
      return state;
  }
};

export default combineReducers({ preferences });