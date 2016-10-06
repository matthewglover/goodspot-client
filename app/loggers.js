/* eslint-disable import/prefer-default-export, no-console */

export const logError = err => {
  if (process.env.NODE_ENV !== 'development') return;
  console.log(err);
};
