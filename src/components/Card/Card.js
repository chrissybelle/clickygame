import React from 'react';
import PropTypes from 'prop-types';
import "./card.css";
// import images from "../images.json";
// import Shuffled from "../Shuffled/Shuffled";

class Card extends React.Component {
        // shuffleImages() {
        //    let shuffledArray = images.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        // } 

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       images //shuffledArray
    //     };
    //   }

    // shuffle = id => {
    //     const 
    // }

    render() {

        const { id, name, image, clicked, handleClick} = this.props
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