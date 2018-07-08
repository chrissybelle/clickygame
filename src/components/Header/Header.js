import React from 'react';
import PropTypes from 'prop-types';
import "./Header.css";

class Header extends React.Component {
    render() {

        return (
            <div>
                <div className="feedbackDiv">
                <span className="feedback">{this.props.feedback}</span> 
                </div>                                                                                                                                                                                                                                                                                                                                                                
                <div className="scoreKeeper">
                    <span className="currentScore">Current Score: {this.props.currentScore} | </span>
                    <span className="topScore">Top Score: {this.props.topScore}</span>
                </div>
            </div>
        );

    }

}

export default Header;  