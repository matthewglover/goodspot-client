// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { prop } from 'ramda';
import AutoComplete from 'material-ui/AutoComplete';
import * as fromActionCreators from '../action_creators';
import * as fromReducers from '../reducers';

import { appStateTypes } from '../flow_types';

const { AppState } = appStateTypes;

const SimpleLocalitySearch = ({ dataSource, searchForLocality }) =>
  <AutoComplete
    hintText="Locality"
    dataSource={dataSource.map(prop('description'))}
    onUpdateInput={searchForLocality}
  />;

SimpleLocalitySearch.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchForLocality: PropTypes.func.isRequired,
};


const mapStateToProps = (state: AppState) =>
  ({
    dataSource: fromReducers.getLocalitySearchResults(state),
  });


const mapDispatchToProps = (dispatch: Function) =>
  ({
    searchForLocality: input =>
      dispatch(fromActionCreators.searchForLocality(input)),
  });


const LocalitySearch =
  connect(mapStateToProps, mapDispatchToProps)(SimpleLocalitySearch);


export default LocalitySearch;
