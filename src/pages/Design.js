import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import styles from "./Design.module.css"
import MBDayFlyer from "../assets/images/MBDay/flyer.jpg"
import MBDayBanner from "../assets/images/MBDay/eBanner.jpg"
import MBDayFomites from "../assets/images/MBDay/fomites.jpg"
import Drone from "../assets/images/drone.jpg"
import IMUCupPhoenix from "../assets/images/IMUCupPics/Phoenix.png"
import IMUCupGriffin from "../assets/images/IMUCupPics/Griffin.png"
import IMUCupPegasus from "../assets/images/IMUCupPics/Pegasus.png"
import IMUCupTaurus from "../assets/images/IMUCupPics/Taurus.png"
import IMUCupHydra from "../assets/images/IMUCupPics/Hydra.png"
import IMUCupDraco from "../assets/images/IMUCupPics/Draco.png"
import HomecomingEventFlow from "../assets/images/HomecomingPics/EventFlow.jpg"
import HomecomingEventFlow2 from "../assets/images/HomecomingPics/EventFlow2.jpg"
import HomecomingCountdown from "../assets/images/HomecomingPics/Countdown.jpg"
import HomecomingLanyard from "../assets/images/HomecomingPics/Lanyard.png"

const Design = ({ handleImage, toggleModal, modal, previewImage }) => {
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
          <h1>My hall of design</h1>
        </div><div className={styles.page2}>
          <div className={styles.images}>
            <img
              src={MBDayFlyer}
              alt="MB Day Flyer"
              className={`${styles.MBDayFlyer} ${styles.border}`}
              onClick={handleImage} />
            <div>
              <img
                src={MBDayBanner}
                alt="MB Day Banner"
                className={`${styles.MBDayBanner} ${styles.border}`}
                onClick={handleImage} />
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <img
                  src={MBDayFomites}
                  alt="MB Day Fomites Poster"
                  className={`${styles.MBDayFomites}`}
                  onClick={handleImage} />
                <img
                  src={Drone}
                  alt="Drone Poster"
                  className={`${styles.drone}`}
                  onClick={handleImage} />
              </div>
              <p className={styles.swipe4More}>SWIPE LEFT FOR MORE ></p>
            </div>
          </div>
          <div className={styles.images}>
            <img
              src={IMUCupPhoenix}
              alt="IMU Cup Phoenix Banner"
              className={styles.IMUCupBanner}
              onClick={handleImage} />
            <img
              src={IMUCupGriffin}
              alt="IMU Cup Griffin Banner"
              className={styles.IMUCupBanner2}
              onClick={handleImage} />
            <img
              src={IMUCupPegasus}
              alt="IMU Cup Pegasus Banner"
              className={styles.IMUCupBanner}
              onClick={handleImage} />
            <img
              src={IMUCupTaurus}
              alt="IMU Cup Taurus Banner"
              className={styles.IMUCupBanner2}
              onClick={handleImage} />
            <img
              src={IMUCupHydra}
              alt="IMU Cup Hydra Banner"
              className={styles.IMUCupBanner}
              onClick={handleImage} />
            <img
              src={IMUCupDraco}
              alt="IMU Cup Draco Banner"
              className={styles.IMUCupBanner2}
              onClick={handleImage} />
          </div>
          <div className={styles.innerPage}>
            <div className={styles.images}>
              <img
                src={HomecomingEventFlow}
                alt="Homecoming Event Flow (Front)"
                className={styles.Homecoming}
                onClick={handleImage} />
              <img
                src={HomecomingEventFlow2}
                alt="Homecoming Event Flow (Back)"
                className={styles.Homecoming}
                onClick={handleImage} />
              <img
                src={HomecomingCountdown}
                alt="Homecoming Countdown"
                className={styles.Homecoming}
                onClick={handleImage} />
              <img
                src={HomecomingLanyard}
                alt="Homecoming Lanyard"
                className={styles.Homecoming2}
                onClick={handleImage} />
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
      <div className={styles.designModal} style={modal ? { display: "block" } : { display: "none" }} onClick={toggleModal}>
        <img
          src={previewImage}
          alt="preview image"
          className={styles.imagePreview} />
      </div>
      <footer />
    </div>
  )
}

export default Design
