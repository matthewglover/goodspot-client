/* eslint-disable max-len */
import test from 'ava';
import authReducer from '../../app/reducers/auth_reducer';
import {
  AUTH_LOGIN,
  AUTH_LOGGING_IN,
  AUTH_LOGOUT,
  AUTH_FAILURE } from '../../app/action_types';


const credentials = Object.freeze({
  name: 'Matt',
  id: '1122334455',
});

const newCredentials = Object.freeze({
  name: 'Jess',
  id: '34324323',
});

const jwt = 'awebtokenstring';

// Freeze initial states, as want to check that reducer doesn't mutate
const loggedOutState = Object.freeze({
  status: 'loggedOut',
});

const loggingInState = Object.freeze({
  status: 'loggingIn',
});

const loggedInState = Object.freeze({
  status: 'loggedIn',
  credentials,
  jwt,
});

test('authReducer default state is logged out', (t) => {
  const actual = authReducer(undefined, {});
  t.deepEqual(actual, loggedOutState);
});

test('authReducer with authLoggingIn state and AUTH_LOGIN action updates state to logged in', (t) => {
  const action = { type: AUTH_LOGIN, jwt, credentials };
  const actual = authReducer(loggingInState, action);
  t.deepEqual(actual, loggedInState);
});

test('authReducer with authLoggedOut state and AUTH_LOGIN action does not update state', (t) => {
  const action = { type: AUTH_LOGIN, jwt, credentials };
  const actual = authReducer(loggedOutState, action);
  t.is(actual, loggedOutState);
});

test('authReducer with authLoggedIn state and AUTH_LOGIN action does not update state', (t) => {
  const action = { type: AUTH_LOGIN, jwt, credentials: newCredentials };
  const actual = authReducer(loggedInState, action);
  t.is(actual, loggedInState);
});

test('authReducer with AUTH_LOGGING_IN action updates state to logging in', (t) => {
  const action = { type: AUTH_LOGGING_IN };
  const actual = authReducer(loggedOutState, action);
  t.deepEqual(actual, loggingInState);
});

test('authReducer with AUTH_LOGOUT action updates state to logged out', (t) => {
  const action = { type: AUTH_LOGOUT };
  const actual = authReducer(loggedInState, action);
  t.deepEqual(actual, loggedOutState);
});

test('authReducer with AUTH_FAILURE action updates state to not logging in', (t) => {
  const err = new Error('Auth failed');
  const action = { type: AUTH_FAILURE, err };
  const actual = authReducer(loggingInState, action);
  t.deepEqual(actual, { status: 'loginFailure', err });
});
