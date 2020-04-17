import React from 'react';
import { NavLink as Link } from "react-router-dom"
import { Button } from "reactstrap"
import Image from "react-graceful-image"
import styles from "./Navbar.module.css"
import NavIcon from "../assets/images/image2.jpg"
import cloud2 from "../assets/images/cloud2.png"

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        {/* <div className={styles.navPing}></div> */}
        <div className={styles.navIcon}>
          <Image src={NavIcon} className={styles.icon} />
          {/* <Image src={cloud} className={styles.cloud} /> */}
          <Image src={cloud2} className={styles.cloud} />
          <div className={styles.navName}>Melissa</div>
        </div>
        <div className={styles.navItems}>
          <Button
            className={styles.navItem}
            tag={Link}
            to="/myprofile"
          >
            My Profile
          </Button>
          <Button
            className={styles.navItem}
            tag={Link}
            to="/degreelife"
          >
            My Degree journey
          </Button>
          <Button
            className={styles.navItem}
            tag={Link}
            to="/codinglife"
          >
            My Coding journey
          </Button>
          <Button
            className={styles.navItem}
            tag={Link}
            to="/designlife"
          >
            My Design journey
          </Button>
          <hr className={styles.navLine} />
          <div className={styles.navContact}>
            <a href="https://github.com/Melissathw97" target="_blank" className={styles.link}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/Melissathw/" target="_blank" className={styles.link}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
