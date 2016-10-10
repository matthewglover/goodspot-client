import * as localStorage from '../local_storage';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const authenticateToken =
  () =>
    delay(1000).then(() => ({ name: 'Matt', id: '12345' }));

export const logout =
  () => Promise.resolve(localStorage.clearState());
