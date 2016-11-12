export default Object.freeze({
  locality1: {
    location: { lat: 1, lng: 2 },
    next_page_token: 'page2',
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
  locality2: {
    location: { lat: 3, lng: 4 },
    next_page_token: 'page2',
    results: [
      {
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
      },
      {
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
      },
    ],
  },
});
