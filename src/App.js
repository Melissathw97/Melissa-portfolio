import React, { useState } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import MyProfile from "./pages/Myprofile"
import Degree from "./pages/Degree"
import Coding from "./pages/Coding"
import Design from "./pages/Design"

function App() {
  const [modal, setModal] = useState(false)
  const [previewImage, setPreviewImage] = useState(null);
  const [isShown, setIsShown] = useState(false)

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  const handleImage = e => {
    let imageFile = e.target.src;
    setPreviewImage(imageFile);
    setModal(!modal);
  }

  const toggleModal = e => {
    e.preventDefault();
    setModal(!modal);
  }

  // if (window.innerWidth < 1000) {
  //   document.body.innerHTML = "Please view this webpage on a desktop :)"
  // }

  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage />
      </Route>
      <Route path="/myprofile">
        <MyProfile
          isShown={isShown}
          setIsShown={setIsShown}
          ScrollToTop={ScrollToTop} />
      </Route>
      <Route path="/degreelife">
        <Degree
          isShown={isShown}
          setIsShown={setIsShown}
          ScrollToTop={ScrollToTop} />
      </Route>
      <Route path="/codinglife">
        <Coding
          isShown={isShown}
          setIsShown={setIsShown}
          ScrollToTop={ScrollToTop}
          modal={modal}
          previewImage={previewImage}
          handleImage={handleImage}
          toggleModal={toggleModal} />
      </Route>
      <Route path="/designlife">
        <Design
          modal={modal}
          previewImage={previewImage}
          handleImage={handleImage}
          toggleModal={toggleModal} />
      </Route>
      <footer>
        <p className="footer"><i class="fas fa-copyright"></i> 2020 melissa teh</p>
      </footer>
    </div>
  );
}

export default App;
