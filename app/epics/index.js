import { combineEpics } from 'redux-observable';
import searchForLocalityEpic from './search_for_locality_epic';
import setSelectedLocalityEpic from './set_selected_locality_epic';
import getPlacesNearLocalityEpic from './get_places_near_locality_epic';

const rootEpic = combineEpics(
  searchForLocalityEpic,
  setSelectedLocalityEpic,
  getPlacesNearLocalityEpic);

export default rootEpic;
