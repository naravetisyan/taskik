import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';
import './index.css';

const Title = ({ title })=>{
    return (
        <div className="title">
            <Header>{title}</Header>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string,
};

export default Title;