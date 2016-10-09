import test from 'ava';
import rootReducer from '../../app/reducers';

const initialState = {
  auth: {
    isAuthenticated: false,
  },
};

test('rootReducer combines reducers and returns initial state', (t) => {
  const actual = rootReducer(undefined, {});
  t.deepEqual(actual, initialState);
});
