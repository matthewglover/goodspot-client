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
