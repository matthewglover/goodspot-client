import { fetchProtected, apiUrl, objToQueryString } from './helpers';

const AUTOCOMPLETE_URI =
  `${apiUrl}/autocomplete`;

const resourceUrl = (input) =>
  `${AUTOCOMPLETE_URI}?${objToQueryString({ input })}`;

export const autocomplete =
  (jwt: string, input: string): Promise<Object> =>
    fetchProtected(resourceUrl(input), jwt)
    .then(localities => ({ input, localities }));

export default autocomplete;
