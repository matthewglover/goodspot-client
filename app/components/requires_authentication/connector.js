import { compose, pick, prop } from 'ramda';
import { connect } from 'react-redux';

// mapStateToProps :: State -> { isAuthenticated: boolean }
const mapStateToProps =
  compose(pick(['isAuthenticated']), prop('auth'));

const connector =
  connect(mapStateToProps);

export default connector;
