import { compose } from 'ramda';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateAuthStatus } from '../../action_creators/';
import SimpleLogin from './simple_login';


const mapStateToProps = ({ auth: { isAuthenticated } }) =>
  ({ isAuthenticated });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateAuthStatus }, dispatch);

// eslint-disable-next-line no-shadow
const mergeProps = ({ isAuthenticated }, { updateAuthStatus }, { router }) =>
  ({
    doLogin: () => {
      updateAuthStatus(!isAuthenticated);
      router.push('/splash');
    },
  });

const connector =
  compose(withRouter, connect(mapStateToProps, mapDispatchToProps, mergeProps));

const Login =
  connector(SimpleLogin);

export default Login;
