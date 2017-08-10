import React, { Component } from 'react';
import Header from './components/header/Header'
import MealSlider from './components/MealSlider/MealSlider'
import BottomContainer from './components/bottomContainer/BottomContainer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MealSlider />
        <BottomContainer />
      </div>
    );
  }
}

export default App;
