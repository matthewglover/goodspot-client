// @flow
import { tryCatch, always } from 'ramda';
import { logError } from './loggers';

type SavedState = Object;

const dangerouslyLoadState = (): ?SavedState => {
  const serializedState = window.localStorage.getItem('state');

  return serializedState
    ? JSON.parse(serializedState)
    : undefined;
};

const dangerouslySaveState = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
};

const dangerouslyClearState = () => {
  localStorage.removeItem('state');
};

export const loadState =
  tryCatch(dangerouslyLoadState, always(undefined));

export const saveState =
  tryCatch(dangerouslySaveState, logError);

export const clearState =
  tryCatch(dangerouslyClearState, logError);
