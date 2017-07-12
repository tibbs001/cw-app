/*
 *
 * Study reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CROWD_ACTION,
  TRACKING_ACTION,
  DESCRIPTIVE_ACTION,
  ADMINISTRATIVE_ACTION,
  RECRUITMENT_ACTION,
  REVIEWS_RECEIVE_ACTION,
  REVIEW_RECEIVE_ACTION,
  WIKI_ACTION,
} from './constants';

const initialState = fromJS({});

function studyReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('study', action.data);
    case CROWD_ACTION:
      return state.set('crowd', action.data);
    case TRACKING_ACTION:
      return state.set('tracking', action.data);
    case DESCRIPTIVE_ACTION:
      return state.set('descriptive', action.data);
    case ADMINISTRATIVE_ACTION:
      return state.set('administrative', action.data);
    case RECRUITMENT_ACTION:
      return state.set('recruitment', action.data);
    case REVIEWS_RECEIVE_ACTION:
      return state.set('reviews', action.data);
    case REVIEW_RECEIVE_ACTION:
      return state.set('review', action.data);
    case WIKI_ACTION:
      return state.set('wiki', fromJS(action.data));
    default:
      return state;
  }
}

export default studyReducer;
