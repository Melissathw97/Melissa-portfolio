import React from 'react'
import Navbar from "../components/Navbar"
import styles from "./Degree.module.css"
import ScrollToTop from '../components/ScrollToTop'

const Biotech = ({ ScrollToTop }) => {
  return (
    <div className={`page ${styles.page}`}>
      <Navbar />
      <div className={styles.line1}></div>
      <div className={styles.biotechTitle}>
        <p className={styles.myTake}>My take</p>
        <p className={styles.onUniLife}>on uni life</p>
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
          </div>
          <div className={styles.contentBox2}>
            <h1 className={styles.number2}><span>#2</span></h1>
            <p><strong><span className={styles.mentalHealth}>Mental health</span><br />is as important as physical health</strong></p>
            <p>and it's as important to</p>
            <p>find people who think the same</p>
          </div>
          <div className={styles.contentBox3}>
            <h1>#3</h1>
            <p>Nobody is obligated to take care of you</p>
            <p>So if you have people who do</p>
            <p>then count your blessings</p>
          </div>
        </div>
      </div>
      <div className={styles.scrollUpBtn} onClick={ScrollToTop}>
        <div className={styles.scrollUpText}><i class="fas fa-angle-double-up"></i></div>
      </div>
    </div >
  )
}

export default Biotech
