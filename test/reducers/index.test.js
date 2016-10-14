/* eslint-disable max-len */
import test from 'ava';
import * as fromReducer from '../../app/reducers';

const err = new Error('Login failed');

const credentials = Object.freeze({
  name: 'Matt',
  id: '1122334455',
});

const jwt = 'awebtokenstring';

// Freeze initial states, as want to check that reducer doesn't mutate
const loggedOutState = Object.freeze({
  auth: {
    status: 'loggedOut',
  },
});

const loggingInState = Object.freeze({
  auth: {
    status: 'loggingIn',
  },
});

const loggedInState = Object.freeze({
  auth: {
    status: 'loggedIn',
    credentials,
    jwt,
  },
  localitySearch: [
    { description: 'Bethnal Green', place_id: '12345' },
    { description: 'Honor Oak Park', place_id: '4324' },
  ],
  placeFinder: {
    locality: {
      description: 'Bethnal Green',
      place_id: '12345',
    },
  },
});

const loginFailureState = Object.freeze({
  auth: {
    status: 'loginFailure',
    err,
  },
});

test('getIsLoggedIn returns true if logged in', (t) => {
  t.true(fromReducer.getIsLoggedIn(loggedInState));
});

test('getIsLoggedIn returns false if not logged in', (t) => {
  t.plan(3);
  t.false(fromReducer.getIsLoggedIn(loginFailureState));
  t.false(fromReducer.getIsLoggedIn(loggingInState));
  t.false(fromReducer.getIsLoggedIn(loggedOutState));
});

test('getIsLoggingIn returns true if logged in', (t) => {
  t.true(fromReducer.getIsLoggingIn(loggingInState));
});

test('getIsLoggingIn returns false if not logging in', (t) => {
  t.plan(3);
  t.false(fromReducer.getIsLoggingIn(loginFailureState));
  t.false(fromReducer.getIsLoggingIn(loggedInState));
  t.false(fromReducer.getIsLoggingIn(loggedOutState));
});

test('getDidLoginFail returns error if login failed', (t) => {
  t.true(fromReducer.getDidLoginFail(loginFailureState));
});

test('getIsLoggingIn returns false if no login failure', (t) => {
  t.plan(3);
  t.false(fromReducer.getDidLoginFail(loggingInState));
  t.false(fromReducer.getDidLoginFail(loggedInState));
  t.false(fromReducer.getDidLoginFail(loggedOutState));
});

test('getJwt returns jwt if logged in', (t) => {
  t.is(fromReducer.getJwt(loggedInState), jwt);
});

test('getJwt returns empty string if not logged in', (t) => {
  t.plan(3);
  t.is(fromReducer.getJwt(loggingInState), '');
  t.is(fromReducer.getJwt(loginFailureState), '');
  t.is(fromReducer.getJwt(loggedOutState), '');
});

test('getLocalitySearchResults returns locality search results', (t) => {
  t.is(fromReducer.getLocalitySearchResults(loggedInState), loggedInState.localitySearch);
});

test('getLocalityFromSearchResults returns locality matching index from search results', (t) => {
  const idx = 0;
  const value = loggedInState.localitySearch[idx].description;
  t.is(
    fromReducer.getLocalityFromSearchResults(loggedInState, idx, value),
    loggedInState.localitySearch[idx]);
});

test('getSelectedLocality returns selected locality', (t) => {
  t.is(
    fromReducer.getSelectedLocality(loggedInState),
    loggedInState.placeFinder.locality);
});
