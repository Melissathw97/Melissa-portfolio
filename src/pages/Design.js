import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import styles from "./Design.module.css"
import MBDayFlyer from "../assets/images/MBDay/flyer.jpg"
import MBDayBanner from "../assets/images/MBDay/eBanner.jpg"
import MBDayFomites from "../assets/images/MBDay/fomites.jpg"
import { Container } from 'reactstrap'

const Design = ({ ScrollToTop, handleImage, toggleModal, modal, previewImage }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    (
      <div className={styles.page1}>
        <h3>My double life as a biotech student and</h3>
        <p className={styles.designTitle}>Amateur Graphic Designer</p>
        <button
          className={styles.startButton}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <p>Let's get started!</p>
        </button>
      </div>
    ), (
      <>
        <div className={styles.header}>
          <h1>Hello</h1>
        </div>
        <div className={styles.page2}>
          <div className={styles.MBDayPage}>
            <div>
              <div className={styles.MBDay}>
                <img
                  src={MBDayFlyer}
                  className={`${styles.MBDayFlyer} ${styles.border}`}
                  onClick={handleImage} />
                <div>
                  <img
                    src={MBDayBanner}
                    className={`${styles.MBDayBanner} ${styles.border}`}
                    onClick={handleImage} />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <img
                      src={MBDayFomites}
                      className={`${styles.MBDayFomites}`}
                      onClick={handleImage} />
                    <div className={styles.content}>
                      <h4>Medical Biotechnology Day 2018</h4>
                    </div>
                  </div>
                  <p className={styles.swipe4More}>SWIPE LEFT FOR MORE :)</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.MBDayPage}>
            <div>
              <h3>My earliest designs</h3>
              <div className={styles.MBDay}>
                <img src={MBDayFlyer} className={styles.MBDayFlyer} />
                {/* <img src={MBDayBanner} className={styles.MBDayBanner} /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  ]
  return (
    <div className={`page ${styles.page}`}>
      <Navbar />
      {pages[currentPage]}
      {/* <div className={styles.scrollUpBtn} onClick={ScrollToTop}>
        <div className={styles.scrollUpText}>
          <i class="fas fa-angle-double-up"></i>
        </div>
      </div> */}
      <div className={styles.designModal} style={modal ? { display: "block" } : { display: "none" }} onClick={toggleModal}>
        <img src={previewImage} className={styles.imagePreview} />
      </div>
    </div>
  )
}

export default Design
