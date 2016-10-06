import { compose, pick, prop } from 'ramda';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateAuthStatus } from '../../action_creators/';


const mapStateToProps =
  compose(pick(['isAuthenticated']), prop('auth'));

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateAuthStatus }, dispatch);

const connector =
  connect(mapStateToProps, mapDispatchToProps);

export default connector;
