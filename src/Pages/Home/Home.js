import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from './../../Components';
import './Home.style.scss';

class Home extends React.Component {

    render() {
        const { welcome } = this.props;
        return (
            <div>
                <Header />
                <h1>{welcome}</h1>
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