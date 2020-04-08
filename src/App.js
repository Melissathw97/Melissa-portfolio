import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import Homepage from "./pages/Homepage"
import Biotech from "./pages/Biotech"
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
      <Route path="/biotechlife">
        <Biotech />
      </Route>
      <Route path="/codinglife">
        <Coding />
      </Route>
      <Route path="/myprofile">
        <MyProfile />
      </Route>
      <footer>
        <p className="footer"><i class="fas fa-copyright"></i> 2020 melissa teh</p>
      </footer>
    </div>
  );
}

export default App;
