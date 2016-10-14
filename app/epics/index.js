import { combineEpics } from 'redux-observable';
import searchForLocalityEpic from './search_for_locality_epic';
import setSelectedLocalityEpic from './set_selected_locality_epic';
import placesInLocalityEpic from './places_in_locality_epic';

const rootEpic = combineEpics(
  searchForLocalityEpic,
  setSelectedLocalityEpic,
  placesInLocalityEpic);

export default rootEpic;
