import React from 'react';
import { NavLink as Link } from "react-router-dom"
import { Button } from "reactstrap"
import Image from "react-graceful-image"
import styles from "./Navbar.module.css"
import NavIcon from "../assets/images/image2.jpg"

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        {/* <div className={styles.navPing}></div> */}
        <div className={styles.navIcon}>
          <Image src={NavIcon} />
          <div className={styles.navName}>MELISSA</div>
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
            to="/biotechlife"
          >
            My Biotech journey
          </Button>
          <Button
            className={styles.navItem}
            tag={Link}
            to="/codinglife"
          >
            My Coding journey
          </Button>
          <div className={styles.navItem}>My Design journey</div>
          <hr className={styles.navLine} />
          <div className={styles.navContact}>
            <a href="https://github.com/Melissathw97" className={styles.link}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/Melissathw/" className={styles.link}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
