import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
// import Image from "./components/Image/Image";
import images from "./images.json";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      images
    };
  }

  handleClick(id) {
    console.log(this.state.images);
    // let clickedArray = [];
    // let clickedImage = this.state.images.filter(image => image.id !== id);
    let images = this.state.images.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    console.log(images);
    this.setState({ images });
  }

// clicked = id => {
//   console.log(this.state.images.clicked);
//   if (this.state.images.clicked == false) {
//     this.setState({clicked: true})
//   }
// }

  render() {
    // let imagesArray = images;
    // console.log(images);
    // let clickedImages = [];

    // shuffleImages() {
    //     this.setState({shuffledArray});
    //     if (this.clicked == false) {
    //       return (

    //)
    //}
    // };
    

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="jumbotron">
            <h1>Clicky Game!</h1>
            <p>Click on an image to earn points, but don't click on any more than once!</p>
          </div>
          <Wrapper> 
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                image={image.image}
                clicked={this.clicked}
                onClick={this.handleClick}
              />
            ))}
            {/* <Shuffled /> */}
          </Wrapper>
        </div>

      </div>
    );
  }
}

export default App;
