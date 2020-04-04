import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import Homepage from "./pages/Homepage"
import Coding from "./pages/Coding"
import MyProfile from "./pages/Myprofile"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/codinglife">
        <Coding />
      </Route>
      <Route path="/myprofile">
        <MyProfile />
      </Route>
    </div>
  );
}

export default App;
