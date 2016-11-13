import { fetchProtected, apiUrl, objToQueryString } from './helpers';

const PLACES_IN_LOCALITY_URL =
  `${apiUrl}/places-in-locality`;

// eslint-disable-next-line camelcase
const resourceUrl = (place_id) =>
  `${PLACES_IN_LOCALITY_URL}?${objToQueryString({ place_id })}`;

export const placesInLocality =
  (jwt: string, placeId: string): Promise<Object> =>
    fetchProtected(resourceUrl(placeId), jwt);

export default placesInLocality;
