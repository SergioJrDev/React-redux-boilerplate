import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Home.style.scss';

class Home extends React.Component {

    render() {
        const { welcome } = this.props;
        return (
            <h1>{welcome}</h1>
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