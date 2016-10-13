import * as helpers from './helpers';

export const autocomplete =
  (jwt: string, input: string): Promise<Object> => {
    const options = {
      cors: true,
      headers: new Headers({ Authorization: `Bearer ${jwt}` }),
    };

    return fetch(`${helpers.apiUrl}/api/v1/autocomplete?input=${input}`, options)
    .then(helpers.requireStatusOk)
    .then(response => response.json())
    .then(localities => ({ input, localities }));
  };

export default autocomplete;
