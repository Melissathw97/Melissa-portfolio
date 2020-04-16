import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import styles from "./Myprofile.module.css"
import melissa from "../assets/images/melissa.jpg"
import melissa2 from "../assets/images/NextPics/melissa2.jpg"
import melissa3 from "../assets/images/NextPics/melissa3.jpg"
import melissa4 from "../assets/images/IMUPics/melissa4.jpg"
import melissa5 from "../assets/images/melissa5.jpg"
import melissa6 from "../assets/images/IMUPics/melissa6.jpg"
import melissa7 from "../assets/images/SMPics/melissa7.jpg"
import melissa8 from "../assets/images/SMPics/melissa8.jpg"
import melissa9 from "../assets/images/IMUCupPics/melissa9.jpg"
import melissa10 from "../assets/images/melissa10.jpg"
import melissa11 from "../assets/images/HomecomingPics/melissa11.jpg"
import melissa12 from "../assets/images/HomecomingPics/melissa12.jpg"
import { withRouter } from 'react-router'
import { Container, Row, Col } from 'reactstrap'

const Myprofile = ({ isShown, setIsShown, ScrollToTop }) => {

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollValue = window.scrollY;
      if (scrollValue > 70) {
        setIsShown(true)
      } else {
        setIsShown(false)
      }
    })
  })

  return (
    <div id="page" className={styles.fullPage}>
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
                  <li>Very much a fan of UI/UX Design.</li>
                  <li>Blessed richly with opportunities that have helped me grow as a human.</li>
                </ul>
                <hr className={styles.divider} />
                <div className={styles.melissaContact}>
                  <a href="#">
                    <i class={`fas fa-map-marker-alt ${styles.melissaContactIcon}`}></i>
                    Bandar Kinrara, Puchong, Selangor
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
                  <h4>International Medical University (IMU)</h4>
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
                <p className={styles.timelineHashtag3}>#biotechftw</p>
                <div className={styles.melissaImageGroup2}>
                  <img src={melissa6} className={styles.melissaImage6} />
                  <img src={melissa4} className={styles.melissaImage4} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              {/* <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup3}>
                <img src={melissa5} className={styles.melissaImage5} />
                </div>
              </div> */}
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2019</span></p>
                </div>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>April - October</h6>
                  <h4>Fisher Scientific (M) Sdn. Bhd.</h4>
                  <p>Customer Service Intern</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.timelineItemLeft}>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>May - November</h6>
                  <h4>Alumni Homecoming Night, IMU</h4>
                  <p>Vice President of Public Relations</p>
                </div>
                <div className={styles.timelineDotLeft2018}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2018</span></p>
                </div>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup5}>
                  <img src={melissa11} className={styles.melissaImage11} />
                  <img src={melissa12} className={styles.melissaImage12} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup4}>
                  <img src={melissa9} className={styles.melissaImage9} />
                </div>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot2018}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2018</span></p>
                </div>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>May - November</h6>
                  <h4>IMU Cup 2018, IMU</h4>
                  <p>Publicity Manager</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" style={{ borderRight: "1px solid white" }}>
              <div className={styles.timelineItemLeft}>
                <div className={styles.timelineItemContent}>
                  <h6 className={styles.timelineItemPeriod}>January - June 2016; June 2018; November 2018</h6>
                  <h4>Pharmahome Pharmacy, Penang</h4>
                  <p>Pharmacy Assistant</p>
                </div>
                <div className={styles.timelineDotLeft2018}>
                  <div className={styles.miniDiamond}></div>
                  <p><span className={styles.year}>2018</span></p>
                </div>
              </div>
            </Col>
            <Col md="6" style={{ borderLeft: "1px solid white" }}>
              <div className={styles.timelinePics}>
                <div className={styles.melissaImageGroup2}>
                  <img src={melissa10} className={styles.melissaImage10} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div id="scrollUpButton" className={styles.scrollUpBtn} onClick={ScrollToTop} style={isShown ? { display: "block" } : { display: "none" }}>
          <div className={styles.scrollUpText}><i class="fas fa-angle-double-up"></i></div>
        </div>
      </div>
    </div >
  )
}

export default Myprofile
