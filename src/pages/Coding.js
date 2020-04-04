import React, { useState, useEffect } from 'react'
import styles from "./Coding.module.css"
import { Container, Row, Col } from "reactstrap"
import Navbar from "../components/Navbar"
import homepagePic from "../assets/images/homepage.png"
import loginPic from "../assets/images/login.png"
import signupPic from "../assets/images/signup1.png"
import mainpagePic from "../assets/images/mainpage.png"
import userprofilePic from "../assets/images/userprofile.png"
import matchPic from "../assets/images/match.png"
import challengesPic from "../assets/images/challenges.png"
import chatPic from "../assets/images/chat.png"
import mentorPic from "../assets/images/mentor.png"

const Coding = () => {
  const [modal, setModal] = useState(false)
  const [previewImage, setPreviewImage] = useState(null);

  const hive = [
    homepagePic,
    loginPic,
    signupPic,
    mainpagePic,
    userprofilePic,
    matchPic,
    challengesPic,
    chatPic,
    mentorPic
  ]

  const handleImage = e => {
    let imageFile = e.target.src;
    setPreviewImage(imageFile);
    setModal(!modal);
  }

  const toggleModal = e => {
    e.preventDefault();
    setModal(!modal);
  }

  return (
    <div className={`page ${styles.page}`}>
      <Navbar />
      <div className={styles.codingHeader}>
        <div className={styles.codingHeaderInner}>
          <div className={styles.codingHeaderBox}>
            <h2>My journey in <br /><span className={styles.codingSpan}>NEXT ACADEMY</span></h2>
          </div>
        </div>
      </div>
      <div className={styles.bottomPart}>
        <Container fluid={true} className={styles.hiveProject}>
          <Row>
            <Col lg="8">
              <h2>My group project</h2>
              <h1 className={styles.projectTitle}>5 | Hive</h1>
              <div className={styles.projectDescription}>
                <p>Ever feel unmotivated to workout? Or feel embarrassed to go to the gym alone?</p>
                <p>Fret not! Our app is here to help :p</p>
                <p>Here at 5|Hive, we prioritize the health of all our users like you</p>
                <p>by helping you become your fittest self</p>
              </div>
            </Col>
            <Col lg="4">
              <div className={styles.projectDescription2}>
                <h2 className={styles.header}>So how does it work?</h2>
                <p>Sign up with us so we can get to know you</p>
                <p>Get matched with a fitness buddy similar <br />to your fitness level and interests</p>
                <p>Alternatively, find a mentor for classes <br />tailored to your fitness goals!</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.projectPics}>
          {hive.map(hivePic => (
            <img
              src={hivePic}
              className={styles.card}
              onClick={handleImage}
            />
          ))}
        </div>
        <p>To view the full app, visit my github repository <a href="https://github.com/Melissathw97/5-Hive" className={styles.link}>here</a></p>
        <div className={styles.codingModal} style={modal ? { display: "block" } : { display: "none" }} onClick={toggleModal}>
          <img src={previewImage} className={styles.imagePreview} />
        </div>
      </div>
    </div>
  )
}

export default Coding;
