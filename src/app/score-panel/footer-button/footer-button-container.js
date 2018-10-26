import React from 'react';
import { connect } from 'react-redux';

import FooterButton from './footer-button';

const Container = props => <FooterButton {...props} />;

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const FooterButtonContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default FooterButtonContainer;
