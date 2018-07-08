import React from 'react';
import PropTypes from 'prop-types';
import "./card.css";

class Card extends React.Component {

    render() {

        const { id, name, image, handleClick} = this.props
        return (
            <div className="card">
            <div className="img-container">
            <img className="image" onClick={() => handleClick(id)} alt={name} src={image} />
            </div>
            </div>

        );
    }
}

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,

    handleClick: PropTypes.func
}


export default Card;