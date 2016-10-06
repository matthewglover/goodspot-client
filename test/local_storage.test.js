import test, { afterEach } from 'ava';
import sinon from 'sinon';
import { loadState, saveState } from '../app/local_storage';

const testData = { test: 'It works!' };
const testPayload = JSON.stringify(testData);
const setItemStub = sinon.stub();
const getItemStub = sinon.stub();


localStorage.getItem = getItemStub;
localStorage.setItem = setItemStub;


afterEach(() => {
  setItemStub.reset();
  getItemStub.reset();
});

test('loadState returns the payload', (t) => {
  getItemStub.returns(testPayload);
  t.deepEqual(loadState(), testData);
});

test('loadState returns undefined if no state found', (t) => {
  getItemStub.returns(null);
  t.is(loadState(), undefined);
});

test('loadState returns undefined if error in serializing JSON or accessing localStorage', (t) => {
  getItemStub.throws(new Error());
  t.is(loadState(), undefined);
});

test('saveState saves the payload to localStorage', (t) => {
  saveState(testData);
  t.plan(2);
  t.true(setItemStub.called);
  t.is(setItemStub.lastCall.args[1], testPayload);
});

test('saveState returns undefined if error in parsing JSON or accessing localStorage', (t) => {
  setItemStub.throws(new Error());
  saveState(testData);
  t.is(saveState(), undefined);
});
