import React from 'react';
import "./image.css";
// import PropTypes from 'prop-types';
// import Card from "../Card/Card";
// import images from "./images.json";

class Image extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         shuffledArray
    //     };
    // }


    render() {
        // let shuffledArray = images.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
        // console.log(shuffledArray);
        return (
            <div>
            {/* {this.state.shuffledArray.map(shuffledArray => (
                    <Card
                        key={shuffledArray.id}
                        image={shuffledArray.image}
                        clicked={shuffledArray.clicked}
                    />
                ))
            } */}
            <img className="image" onClick={this.props.onClick} src={this.props.src} />
            </div>
        )
    }
}

export default Image;