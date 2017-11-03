import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../components/Layout';
import ErrorView from '../../../components/ErrorView';

import './index.css';

function Checkout(props) {
  return (
    <Layout >
      <article>
      	<ErrorView className="error-view" />
      </article>
    </Layout>
  );
}

Checkout.propTypes = {
};

export default Checkout;