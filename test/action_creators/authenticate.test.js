/* eslint-disable max-len */
import test from 'ava';
import sinon from 'sinon';
import createAuthenticate from '../../app/action_creators/authenticate';
import {
  AUTH_LOGIN,
  AUTH_LOGGING_IN,
  AUTH_FAILURE } from '../../app/action_types';

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

const loggedInState = Object.freeze({
  auth: {
    status: 'loggedIn',
    credentials,
    jwt,
  },
});

const authError = new Error('Authentication failed');

const api = {
  authenticateToken: (token) =>
    (token === jwt
      ? Promise.resolve(credentials)
      : Promise.reject(authError)),
};

const authenticate = createAuthenticate(api);


test('authenticate updates authState and issues an AUTH_LOGIN action when called with valid jwt', async (t) => {
  t.plan(4);
  const dispatchStub = sinon.stub();
  await t.notThrows(authenticate(jwt)(dispatchStub, () => loggedOutState));
  t.is(dispatchStub.callCount, 2);
  t.deepEqual(dispatchStub.firstCall.args[0], { type: AUTH_LOGGING_IN });
  t.deepEqual(dispatchStub.secondCall.args[0], { type: AUTH_LOGIN, jwt, credentials });
});

test('authenticate does not update authState and issues an AUTH_FAILURE action  when called with invalid jwt', async (t) => {
  t.plan(4);
  const dispatchStub = sinon.stub();
  await t.notThrows(authenticate('invalid')(dispatchStub, () => loggedOutState));
  t.is(dispatchStub.callCount, 2);
  t.deepEqual(dispatchStub.firstCall.args[0], { type: AUTH_LOGGING_IN });
  t.deepEqual(dispatchStub.secondCall.args[0], { type: AUTH_FAILURE, err: authError });
});

test('authenticate rejects Promise with an error and does not update authState when already logged in', async (t) => {
  t.plan(3);
  const dispatchStub = sinon.stub();
  const err = await t.throws(authenticate('invalid')(dispatchStub, () => loggedInState));
  t.is(dispatchStub.callCount, 0);
  t.regex(err.message, /User already authenticated/);
});
