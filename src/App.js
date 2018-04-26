import React, { Component } from 'react';
import Layout from "./Containers/Layout";
import Header from "./Containers/Header"
import './App.css';
import BurgerUI from './Containers/Burger/BurgerUI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>Breakfast Meister</Header>
          <BurgerUI></BurgerUI>
        </Layout>
      </div>
    );
  }
}

export default App;