import React, { useState, useEffect } from 'react'
import styles from "./Coding.module.css"
import { Container, Row, Col } from "reactstrap"
import Navbar from "../components/Navbar"
import homepagePic from "../assets/images/5Hive/homepage.png"
import loginPic from "../assets/images/5Hive/login.png"
import signupPic from "../assets/images/5Hive/signup1.png"
import mainpagePic from "../assets/images/5Hive/mainpage.png"
import userprofilePic from "../assets/images/5Hive/userprofile.png"
import matchPic from "../assets/images/5Hive/match.png"
import challengesPic from "../assets/images/5Hive/challenges.png"
import chatPic from "../assets/images/5Hive/chat.png"
import mentorPic from "../assets/images/5Hive/mentor.png"
import ticTacToePic from "../assets/images/myTTT.png"
import nextagramVid from "../assets/images/nextagramvid.mov"

const Coding = ({ isShown, setIsShown, ScrollToTop, handleImage, toggleModal, modal, previewImage }) => {
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

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollValue = window.scrollY;
      if (scrollValue > 70) {
        setIsShown(true)
      } else {
        setIsShown(false)
      }
    })
  }, [])

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
                <p>Ever feel unmotivated to workout? Or embarrassed to go to the gym alone?</p>
                <p>Fret not! Our app is here to help ☺️</p>
                <p>Here at 5|Hive, we prioritize the health of all our users like you</p>
                <p>by helping you become your fittest self 💪🏻</p>
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
        <Container className={styles.codingCoursework}>
          <h2 className={styles.codingCourseworkTitle}>OTHER COURSEWORK</h2>
          <Row>
            <Col lg="5">
              <div className={styles.ticTacToe}>
                <h4 className={styles.ticTacToeTitle}>My tic-tac-toe</h4>
                <img
                  src={ticTacToePic}
                  className={styles.ticTacToePic}
                  onClick={handleImage}
                />
                <a href="https://nifty-blackwell-d55850.netlify.com/" className={styles.link}>Try the game out! 😛</a>
              </div>
            </Col>
            <Col lg="7">
              <div className={styles.nextagram}>
                <h4 className={`${styles.nextagramTitle}`}>My Next-agram</h4>
                <video controls className={styles.nextagramVid}>
                  <source src={nextagramVid} type="video/mp4"></source>
                </video>
                <a href="#" className={styles.link}>Check the website out! 😌</a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.scrollUpBtn} onClick={ScrollToTop} style={isShown ? { display: 'block' } : { display: 'none' }}>
          <div className={styles.scrollUpText}><i class="fas fa-angle-double-up"></i></div>
        </div>
      </div>
    </div >
  )
}

export default Coding;
