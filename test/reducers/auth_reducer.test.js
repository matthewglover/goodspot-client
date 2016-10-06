import test from 'ava';
import { updateAuthStatus } from '../../app/action_creators';
import authReducer from '../../app/reducers/auth_reducer';

// Freeze initial states, as want to check that reducer doesn't mutate
const notAuthState = Object.freeze({
  isAuthenticated: false,
});

const isAuthState = Object.freeze({
  isAuthenticated: true,
});

test('authReducer updates authState when called with updateAuthStatus action', (t) => {
  const actual = authReducer(notAuthState, updateAuthStatus(true));
  t.deepEqual(actual, isAuthState);
});

test('authReducer inital authState isAuthenticated = false', (t) => {
  const actual = authReducer(notAuthState, {});
  t.deepEqual(actual, notAuthState);
});
