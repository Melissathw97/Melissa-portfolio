import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import Homepage from "./pages/Homepage"
import Degree from "./pages/Degree"
import Coding from "./pages/Coding"
import MyProfile from "./pages/Myprofile"

function App() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/degreelife">
        <Degree ScrollToTop={ScrollToTop} />
      </Route>
      <Route path="/codinglife">
        <Coding ScrollToTop={ScrollToTop} />
      </Route>
      <Route path="/myprofile">
        <MyProfile ScrollToTop={ScrollToTop} />
      </Route>
      <footer>
        <p className="footer"><i class="fas fa-copyright"></i> 2020 melissa teh</p>
      </footer>
    </div>
  );
}

export default App;
