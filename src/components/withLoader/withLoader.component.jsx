import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSectionLoadingStatus } from '../../redux/sections/sections.selectors';

import { Dimmer, Loader } from 'semantic-ui-react';

const WithLoader = WrappedComponent => ({loading, ...otherProps}) => {
  return loading ? (<Dimmer><Loader /></Dimmer>) : 
  (<WrappedComponent {...otherProps} />);
}

const mapStateToProps = createStructuredSelector({
  loading: selectSectionLoadingStatus
});

const WithLoaderFunction = (WrappedComponent) => connect(mapStateToProps)(WithLoader(WrappedComponent));

export default WithLoaderFunction;