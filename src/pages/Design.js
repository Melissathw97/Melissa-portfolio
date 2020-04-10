import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import styles from "./Design.module.css"
import MBDayFlyer from "../assets/images/MBDay/flyer.jpg"
import MBDayBanner from "../assets/images/MBDay/eBanner.jpg"

const Design = ({ ScrollToTop }) => {
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
      <div className={styles.page2}>
        <h3>My earliest designs</h3>
        <img src={MBDayFlyer} className={styles.MBDayFlyer} />
        <img src={MBDayBanner} className={styles.MBDayBanner} />
      </div>
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
    </div>
  )
}

export default Design
