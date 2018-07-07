import React from 'react';
import PropTypes from 'prop-types';
import "./Header.css";

class Header extends React.Component {
    render() {
        let currentScore = 0;

        if(this.props.clicked == false) {
            return (
                <div>
                <h3>You guessed correctly!</h3>
                <h3>Current Score: {currentScore++}</h3>
                </div>
            );
        } else {
            return (
                <div>
                <h3>You guessed incorrectly!</h3>
                <h3>Current Score: {currentScore = 0}</h3>
                </div>
            )
        }
    }

}

export default Header;