import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import ActivityIndicator from './ActivityIndicator';
import Toast from './Toast';

const Layout = ({children}) => {
  return (
    <main>
      {children}
      <ActivityIndicator />
      <Toast />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
