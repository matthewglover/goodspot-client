/* eslint-disable no-console */

export const logError = err => {
  if (process.env.NODE_ENV !== 'development') return;
  console.log(err);
};

export const trace = (description) => (data) => {
  console.log(description, data);
  return data;
};
