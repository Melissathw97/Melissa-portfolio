import React from 'react'
import Navbar from "../components/Navbar"
import styles from "./Myprofile.module.css"
import melissa from "../assets/images/melissa.jpg"
import melissa2 from "../assets/images/melissa2.jpg"
import melissa3 from "../assets/images/melissa3.jpg"
import melissa4 from "../assets/images/melissa4.jpg"
import melissa5 from "../assets/images/melissa5.jpg"
import melissa6 from "../assets/images/melissa6.jpg"
import melissa7 from "../assets/images/SMPics/melissa7.jpg"
import melissa8 from "../assets/images/SMPics/melissa8.jpg"
import { withRouter } from 'react-router'
import { Container, Row, Col } from 'reactstrap'

const Myprofile = () => {
  return (
    <div className={styles.fullPage}>
      <Navbar />
      <div className={styles.container}>
        <Container>
          <Row>
            <Col md="5">
              <img src={melissa} className={styles.melissaImage} />
            </Col>
            <Col md="7">
              <h1 className={styles.melissa}>
                Melissa
              </h1>
              <div>
                <ul>
                  <li>A medical biotech graduate venturing into the world of coding.</li>
                  <li>Very much an enthusiast of UI/UX Design.</li>
                  <li>Blessed richly with opportunities that have helped me grow as a human.</li>
                  <li>I believe in putting my heart and soul into everything I do, <br /> and in chasing after my dreams </li>
                </ul>
                <hr className={styles.divider} />
                <div className={styles.melissaContact}>
                  <a href="#">
                    <i class={`fas fa-map-marker-alt ${styles.melissaContactIcon}`}></i>
                    Puchong, Selangor
                  </a>
                  <a href="#">
                    <i class={`fas fa-phone-square-alt ${styles.melissaContactIcon}`}></i>
                    +6 012-213 1997
                  </a>
                  <a href="https://github.com/Melissathw97">
                    <i className={`fab fa-github ${styles.melissaContactIcon}`}></i>
                    github.com/Melissathw97
                  </a>
                  <a href="https://www.linkedin.com/in/Melissathw/">
                    <i className={`fab fa-linkedin ${styles.melissaContactIcon}`}></i>
                    linkedin.com/in/Melissathw
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <h1 className={styles.timelineTitle}>My Timeline.</h1>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.melissaImageGroup}>
                <img src={melissa3} className={styles.melissaImage3} />
                <img src={melissa2} className={styles.melissaImage2} />
                <p className={styles.timelineHashtag}>#coding@NEXT</p>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2020</span></p>
                </div>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>January - March</h6>
                  <h4>Next Academy</h4>
                  <p>Full-Stack Web Development Bootcamp</p>
                  <h6>HTML, CSS, Javascript, React, Python, Flask</h6>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.timelineItemLeft}>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>November - December</h6>
                  <h4>OBD Garden Towers Condominium <br />Management Corp</h4>
                  <p>Part-time Administrative Assistant</p>
                </div>
                <div className={styles.timelineDotLeft}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2019</span></p>
                </div>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup2}>
                  <img src={melissa5} className={styles.melissaImage5} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup}>
                  <p className={styles.timelineHashtag2}>#SMatheart</p>
                  <img src={melissa7} className={styles.melissaImage7} />
                  <img src={melissa8} className={styles.melissaImage8} />
                </div>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2019</span></p>
                </div>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>Easter & Christmas 2015 - 2019</h6>
                  <h4>Calvary Church, Calvary Convention Center</h4>
                  <p>Deputy Stage Manager</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.timelineItemLeft}>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>August 2016 - November 2019</h6>
                  <h4>International Medical University</h4>
                  <p>Bachelors of Science (Hons) Medical Biotechnology</p>
                </div>
                <div className={styles.timelineDotLeft}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2019</span></p>
                </div>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup2}>
                  <p className={styles.timelineHashtag3}>#imubiotechftw</p>
                  <img src={melissa6} className={styles.melissaImage6} />
                  <img src={melissa4} className={styles.melissaImage4} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.timelineItemLeft}>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>April - October</h6>
                  <h4>Fisher Scientific (M) Sdn. Bhd.</h4>
                  <p>Customer Service Intern</p>
                </div>
                <div className={styles.timelineDotLeft}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2019</span></p>
                </div>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup3}>
                  <img src={melissa5} className={styles.melissaImage5} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  )
}

export default Myprofile
