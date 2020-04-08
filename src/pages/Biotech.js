import React from 'react'
import Navbar from "../components/Navbar"
import styles from "./Biotech.module.css"

const Biotech = () => {
  return (
    <div className={`page ${styles.page}`}>
      <Navbar />
      <div className={styles.line1}></div>
      <div className={styles.biotechTitle}>
        <p className={styles.myTake}>My take</p>
        <p className={styles.onUniLife}>on uni life</p>
        <div className={styles.biotechTitleDescription}>
          <p>A self-reflection of my time in IMU.</p>
        </div>
      </div>
      <div className={styles.biotechContent}>
      </div>
    </div>
  )
}

export default Biotech
