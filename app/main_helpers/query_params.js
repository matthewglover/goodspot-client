// @flow

const queryPairs: string[] =
  window.location.search.match(/[^?&]+/g) || [];


const queryParams: Object =
  queryPairs
  .map(s => s.split('='))
  .reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});

export default queryParams;
