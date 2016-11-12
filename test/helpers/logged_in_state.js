export default Object.freeze({
  auth: {
    status: 'loggedIn',
    credentials: {
      name: 'Matt',
      id: '1122334455',
    },
    jwt: 'awebtokenstring',
  },
  localitySearch: [
    {
      description: 'Bethnal Green',
      place_id: '12345',
    },
    {
      description: 'Honor Oak Park',
      place_id: '4324',
    },
  ],
  placeFinder: {
    locality: {
      description: 'Bethnal Green',
      place_id: '12345',
    },
    view: 'list',
  },
  places: {
    12345: {
      location: { lat: 1, lng: 2 },
      next_page_token: '12345token',
      results: [
        {
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
        },
        {
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
        },
      ],
    },
  },
});
