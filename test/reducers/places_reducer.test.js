/* eslint-disable max-len */
import test from 'ava';
import { merge } from 'ramda';
import places, * as fromPlacesReducer from '../../app/reducers/places_reducer';
import {
  PLACES_LOADED } from '../../app/action_types';

const placeOne = {
  place_id: 'EipCZXRobmFsIEdyZWVuIFJvYWQsIExvbmRvbiwgVW5pdGVkIEtpbmdkb20',
  name: 'The Shoreditch',
  vicinity: '145 Shoreditch High Street, London',
  geometry: {
    location: {
      lat: 51.52588799999999,
      lng: -0.07814800000000001,
    },
  },
  types: ['bar', 'nightclub', 'restaurant'],
};

const placeTwo = {
  place_id: 'ChIJJ9DmjrocdkgR-TgBZwwKdKc',
  name: 'Callooh Callay',
  vicinity: '65 Rivington St, London',
  geometry: {
    location: {
      lat: 51.5262938,
      lng: -0.0799016,
    },
  },
  types: ['bar', 'nightclub', 'restaurant'],
};

const placeThree = {
  place_id: 'ChIJw4LAETQCdkgR1C87idsdJR0',
  name: 'Babur',
  vicinity: '119 Brockley Rise, London',
  geometry: {
    location: {
      lat: 51.44743899999999,
      lng: -0.0419572,
    },
  },
  types: ['bar', 'establishment', 'restaurant'],
};

const placeFour = {
  place_id: 'ChIJgcbTmDYCdkgReTwvifXztJM',
  name: 'Le Querce',
  vicinity: '66 Brockley Rise, London',
  geometry: {
    location: {
      lat: 51.447923,
      lng: -0.041051,
    },
  },
  types: ['bar', 'establishment', 'restaurant'],
};

const placeFive = {
  place_id: 'ChIJi2edJTICdkgR25Q88_BrBwk',
  name: 'The Honor Oak Pub',
  vicinity: '1 Saint German\'s Road, London',
  geometry: {
    location: {
      lat: 51.4431914,
      lng: -0.0422517,
    },
  },
  types: ['bar', 'establishment', 'restaurant'],
};

const localityIdA = 'EipCZXRobmFsIEdyZWVuIFJvYWQsIExvbmRvbiwgVW5pdGVkIEtpbmdkb20';

const localityIdAData = {
  next_page_token: '12345token',
  results: [
    placeOne,
    placeTwo,
  ],
};

const localityIdB = 'ChIJcb40PTUCdkgRlNQvOoSar98';

const localityIdBData = {
  results: [
    placeThree,
    placeFour,
  ],
};


const localityIdBMoreData = {
  results: [
    placeThree,
    placeFive,
  ],
};


const placesStateA = {
  [localityIdA]: localityIdAData,
};

const placesStateB = {
  [localityIdB]: localityIdBData,
};

const placesStateC = {
  [localityIdA]: localityIdAData,
  [localityIdB]: localityIdBData,
};


test('places reducer default state is an empty object', (t) => {
  t.deepEqual(places(undefined, {}), {});
});

test('places reducer adds places on PLACES_LOADED action', (t) => {
  const myAction = {
    type: PLACES_LOADED,
    localityId: localityIdA,
    places: localityIdAData,
  };

  t.deepEqual(places(undefined, myAction), placesStateA);
});

test('places reducer adds new localityId and keeps existing on PLACES_LOADED action', (t) => {
  const myAction = {
    type: PLACES_LOADED,
    localityId: localityIdB,
    places: localityIdBData,
  };

  const actual = places(placesStateA, myAction);

  t.deepEqual(actual, merge(placesStateA, placesStateB));
});

test('places reducer adds new data to existing localityId on PLACES_LOADED action', (t) => {
  const myAction = {
    type: PLACES_LOADED,
    localityId: localityIdB,
    places: localityIdBMoreData,
  };

  const actual = places(placesStateB, myAction);


  const expected = {
    [localityIdB]: {
      results: [
        placeThree,
        placeFour,
        placeFive,
      ],
    },
  };

  t.deepEqual(actual, expected);
});

test('fromPlacesReducer.getPlacesForLocality returns all places for given locality', (t) => {
  t.is(
    fromPlacesReducer.getPlacesForLocality(placesStateC, localityIdA),
    localityIdAData);
});

test('fromPlacesReducer.placeDataExistsForLocality returns if data exists for locality', (t) => {
  t.plan(3);
  t.true(
    fromPlacesReducer.placeDataExistsForLocality(placesStateC, localityIdA));
  t.true(
    fromPlacesReducer.placeDataExistsForLocality(placesStateC, localityIdB));
  t.false(
    fromPlacesReducer.placeDataExistsForLocality(placesStateA, localityIdB));
});
