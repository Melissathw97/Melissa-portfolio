import React from 'react'
import Navbar from "../components/Navbar"
import styles from "./Degree.module.css"
import ScrollToTop from '../components/ScrollToTop'
import { Container, Row, Col } from 'reactstrap'

const Biotech = ({ ScrollToTop }) => {
  return (
    <div className={`page ${styles.page}`}>
      <Navbar />
      <div className={styles.line1}></div>
      <div className={styles.biotechTitle}>
        <p className={styles.myTake}>My take<span className={styles.away}>away</span></p>
        <p className={styles.onUniLife}>from uni life</p>
        <div className={styles.biotechTitleDescription}>
          <p>A self-reflection of my time in IMU</p>
        </div>
      </div>
      <div className={styles.biotechContent}>
        <div className={styles.row1}>
          <div className={styles.contentBox1}>
            <h1 className={styles.number}>#1</h1>
            <p>The biggest lesson I learned</p>
            <p>is that</p>
            <p><span className={styles.ok2fail}>it's <strong>OKAY</strong> to <strong>FAIL</strong></span></p>
            <p>heck, failing's a part of life.</p>
            <p>same goes for rejection.</p>
          </div>
          <div className={styles.contentBox2}>
            <h1 className={styles.number2}><span>#2</span></h1>
            <p><strong><span className={styles.mentalHealth}>Mental health</span><br />is as important as physical health</strong></p>
            <p>and it's as important to</p>
            <p>be around people who think the same</p>
          </div>
          <div className={styles.contentBox3}>
            <h1 className={styles.number3}>#3</h1>
            <p><span className={styles.nobody}>Nobody</span><br />is obligated to take care of you</p>
            <p>So if you have people who do</p>
            <p>then <span className={styles.countYourBlessings}>count your <br />blessings</span></p>
          </div>
        </div>
        <Container fluid={true}>
          <Row>
            <Col md={6} className={styles.contentBox4}>
              <h1 className={styles.number4}>#4</h1>
              <div className={styles.content}>
                <p>Reminder:</p>
                <p>Always ask yourself</p>
                <p className={styles.question}><i class={`fas fa-quote-left ${styles.quoteIcon}`}></i><span className={styles.questionContent}>Am I being the best <br />version of myself today?</span><i class={`fas fa-quote-right ${styles.quoteIcon}`}></i></p>
              </div>
            </Col>
            <Col md={6} className={styles.contentBox5}>
              <h1 className={styles.number5}>#5</h1>
              <div className={styles.content}>
                <p className={styles.experience}>EXPERIENCE</p>
                <p>WHAT YOU CAN</p>
                <p>WHILE YOU CAN </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.scrollUpBtn} onClick={ScrollToTop}>
        <div className={styles.scrollUpText}><i class="fas fa-angle-double-up"></i></div>
      </div>
    </div >
  )
}

export default Biotech
