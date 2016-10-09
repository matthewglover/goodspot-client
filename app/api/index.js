
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const authenticateToken =
  () =>
    delay(1000).then(() => ({ name: 'Matt', id: '12345' }));

export const anotherAction =
  () =>
    Promise.reject(new Error('A random error'));
