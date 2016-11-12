/* eslint-disable max-len */
import test from 'ava';
import * as fromReducer from '../../app/reducers';
import loggedInState from '../helpers/logged_in_state';
import loggingInState from '../helpers/logging_in_state';
import loginFailureState from '../helpers/login_failure_state';
import loggedOutState from '../helpers/logged_out_state';

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
  t.is(fromReducer.getJwt(loggedInState), 'awebtokenstring');
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

test('getSelectedLocalityId returns selected locality id', (t) => {
  t.is(
    fromReducer.getSelectedLocalityId(loggedInState),
    loggedInState.placeFinder.locality.place_id);
});

test('getPlacesForSelectedLocality returns places for selected locality id', (t) => {
  t.is(
    fromReducer.getPlacesForSelectedLocality(loggedInState),
    loggedInState.places[loggedInState.placeFinder.locality.place_id].results);
});

test('getPlaceFinderView returns current placeFinder view state', (t) => {
  t.is(
    fromReducer.getPlaceFinderView(loggedInState),
    loggedInState.placeFinder.view);
});
