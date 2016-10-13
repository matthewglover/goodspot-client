// // @flow
// import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
// import FlatButton from 'material-ui/FlatButton';
// import * as fromState from '../reducers';
// import * as api from '../api';
//
// const SimpleViewProtected = ({ geocode, pingIt }) =>
//   <div>
//     <FlatButton
//       label="Protected API Call"
//       primary
//       onTouchTap={geocode}
//     />
//     <br /><br />
//     <FlatButton
//       label="Ping"
//       primary
//       onTouchTap={() => pingIt('bethnal')}
//     />
//   </div>;
//
// SimpleViewProtected.propTypes = {
//   geocode: PropTypes.func.isRequired,
//   pingIt: PropTypes.func.isRequired,
// };
//
// const mapStateToProps = (state) =>
//   ({
//     geocode: () => api.geocode(fromState.getJwt(state), 'bethnal'),
//   });
//
// const mapDispatchToProps = (dispatch) =>
//   ({
//     pingIt: (search) => dispatch({ type: 'PING', search }),
//   });
//
// // connector :: React.Component -> React.Component
// const connector =
//   connect(mapStateToProps, mapDispatchToProps);
//
// const ViewProtected = connector(SimpleViewProtected);
//
// export default ViewProtected;
