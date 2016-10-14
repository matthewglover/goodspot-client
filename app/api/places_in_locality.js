import { fetchProtected, apiUrl, objToQueryString } from './helpers';
import { trace } from '../loggers';

const PLACES_IN_LOCALITY_URL =
  `${apiUrl}/places-in-locality`;

// eslint-disable-next-line camelcase
const resourceUrl = (place_id) =>
  `${PLACES_IN_LOCALITY_URL}?${objToQueryString({ place_id })}`;

export const placesInLocality =
  (jwt: string, placeId: string): Promise<Object> =>
    fetchProtected(resourceUrl(placeId), jwt)
    .then(trace('places in locality:'));

export default placesInLocality;
