import 'rxjs';
import { combineEpics } from 'redux-observable';

const pingEpic = actionStream =>
  actionStream
  .ofType('PING')
  .delay(1000)
  .mapTo({ type: 'PONG' });

const rootEpic = combineEpics(pingEpic);

export default rootEpic;
