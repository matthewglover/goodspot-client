
export const authenticateToken =
  () =>
    Promise.resolve({ name: 'Matt', id: '12345' });

export const anotherAction =
  () =>
    Promise.reject(new Error('A random error'));
