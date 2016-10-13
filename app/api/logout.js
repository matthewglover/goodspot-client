import * as localStorage from '../local_storage';

const logout =
  () => Promise.resolve(localStorage.clearState());

export default logout;
