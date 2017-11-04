import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Trending from '../../components/Trending';
import QuickSearch from '../../components/Search/Quick';
import './index.css';

function Home(props) {
  return (
    <Layout >
      <div className="cover">
      </div>
      <QuickSearch headerImage={'https://image.ibb.co/b1jsoG/unnamed_19.jpg'}/>
      <Trending />
    </Layout>
  );
}

Home.propTypes = {
};

const mapStateToProps = state => {
  return {
    store: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Home);