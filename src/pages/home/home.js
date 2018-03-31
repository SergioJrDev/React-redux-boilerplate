import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from './../../components';
import './home.style.scss';

class Home extends React.Component {

  render() {
    const { welcome } = this.props;
    return (
      <div>
        <Header />
        <div className='container'>
          <h1>{welcome}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ welcome }, props) => {
  return {
    welcome,
    ...props
  };
};

Home.propTypes = {
  welcome: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Home);