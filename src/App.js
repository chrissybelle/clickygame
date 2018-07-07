import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
// import Image from "./components/Image/Image";
import images from "./images.json";
import './App.css';


// function shuffleImages() {
//   let images = this.state.images.map((a) => 
//   [Math.random(),a]).sort((a,b) => 
//     a[0]-b[0]).map((a) => 
//       a[1]);
//   this.setState({ images });
// }

//function to shuffle position of images
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      images,
      clickedArray: [],
      feedback: "",
      currentScore: 0,
      topScore: 0
    };
  }


handleClick = (id) => {
  //check if image has been clicked yet
  if (this.state.clickedArray.indexOf(id) < 0) {
    //if image hos not been clicked (added to clickedArray) yet, add id of clicked image to "clickedArray"
    this.state.clickedArray.push(id);
    console.log("clickedArray" + this.state.clickedArray);
    //increment currentScore
    this.state.currentScore++;
    console.log("currentScore:" + this.state.currentScore);
    //show positive feedback
    this.state.feedback="You guessed correctly!";
    console.log("feedback:" + this.state.feedback);
    //shuffle Images
    shuffleImages(this.state.images);
    this.setState({ images })
    //if image has been clicked already
  } else {
      //if player reaches new high score, update top score
      if (this.state.currentScore > this.state.topScore) {
        this.state.topScore = this.state.currentScore;
        console.log("topscore:" + this.state.topScore);
      }
    //reset clickedArray
    this.state.clickedArray=[];
    console.log("clickedArray" + this.state.clickedArray);
    //reset currentScore
    this.state.currentScore=0;
    console.log("currentScore:" + this.state.currentScore);
    //show negative feedback
    this.state.feedback="You guessed incorrectly";
    console.log("feedback:" + this.state.feedback);
    //shuffle Images
    shuffleImages(this.state.images);
    this.setState({ images })
}


}


  render() {

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
                handleClick={this.handleClick}
              />
            ))}

          </Wrapper>
        </div>

      </div>
    );
  }
}

export default App;
