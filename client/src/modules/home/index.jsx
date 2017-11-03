import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Trending from '../../components/Trending';
import QuickSearch from '../../components/Search/Quick';
import './index.css';

function Home(props) {
  return (
    <Layout >
      <div className="cover">
      </div>
      <QuickSearch />
      <Trending />
    </Layout>
  );
}

Home.propTypes = {
};

export default Home;