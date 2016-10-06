import { compose } from 'ramda';
import { withRouter } from 'react-router';
import connector from './connector';
import SimpleLogin from './simple_login';

const Login =
  compose(withRouter, connector)(SimpleLogin);

export default Login;
