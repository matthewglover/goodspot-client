// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { prop } from 'ramda';
import AutoComplete from 'material-ui/AutoComplete';
import * as fromActionCreators from '../action_creators';
import * as fromReducers from '../reducers';

import { appStateTypes } from '../flow_types';

const { AppState } = appStateTypes;


const localityFilter = (searchText: string, key: string): boolean =>
  new RegExp(searchText, 'i').test(key);


const SimpleLocalitySearch = ({ dataSource, searchForLocality, selectLocality }) =>
  <AutoComplete
    hintText="Locality (e.g. Bethnal Green)"
    filter={localityFilter}
    dataSource={dataSource.map(prop('description'))}
    onUpdateInput={searchForLocality}
    onNewRequest={selectLocality}
  />;

SimpleLocalitySearch.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchForLocality: PropTypes.func.isRequired,
  selectLocality: PropTypes.func.isRequired,
};


const mapStateToProps = (state: AppState) =>
  ({
    dataSource: fromReducers.getLocalitySearchResults(state),
  });


const mapDispatchToProps = (dispatch: Function) =>
  ({
    searchForLocality: (input) =>
      dispatch(fromActionCreators.searchForLocality(input)),
    selectLocality: (value, index) =>
      dispatch(fromActionCreators.selectLocality(value, index)),
  });


const LocalitySearch =
  connect(mapStateToProps, mapDispatchToProps)(SimpleLocalitySearch);


export default LocalitySearch;
