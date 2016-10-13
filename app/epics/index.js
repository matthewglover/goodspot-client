import { combineEpics } from 'redux-observable';
import searchForLocalityEpic from './search_for_locality_epic';

const rootEpic = combineEpics(searchForLocalityEpic);

export default rootEpic;
