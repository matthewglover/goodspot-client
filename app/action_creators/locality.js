// @flow
import {
  SEARCH_FOR_LOCALITY,
  SELECT_LOCALITY } from '../action_types';


export const searchForLocality = (input: string) =>
  ({
    type: SEARCH_FOR_LOCALITY,
    input,
  });

export const selectLocality = (value: string, index: number) =>
  ({
    type: SELECT_LOCALITY,
    value,
    index,
  });
