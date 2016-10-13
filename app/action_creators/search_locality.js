/* eslint-disable import/prefer-default-export */
import { SEARCH_FOR_LOCALITY } from '../action_types';


export const searchForLocality = (input: string) =>
  ({
    type: SEARCH_FOR_LOCALITY,
    input,
  });
