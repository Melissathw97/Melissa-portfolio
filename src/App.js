import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import Homepage from "./pages/Homepage"
import Coding from "./pages/Coding"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/coding">
        <Coding />
      </Route>
    </div>
  );
}

export default App;
