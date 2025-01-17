import React from 'react'
import styles from "./Mainpage.module.css"
import { NavLink as Link } from "react-router-dom"
import { Button } from "reactstrap"
import logo from "../assets/images/logowhiteoutline.png"

const Mainpage = () => {
  return (
    <div className={styles.main}>
      <header>
        <h4>Welcome to</h4>
        <img
          src={logo}
          alt="Melissa logo"
          className={styles.logo} />
        <h2 className={styles.myName}>MELISSA TEH</h2>
      </header>
      <p>What would you like to see?</p>
      <div className={styles.diamonds}>
        <Button tag={Link} to="/degreelife" className={styles.diamond}>
          <div className={styles.text}>my <br /><span>DEGREE</span> journey</div>
        </Button>
        <div className={styles.smalldiamond} style={{ margin: "10px 15px" }}></div>
        <Button tag={Link} to="/codinglife" className={styles.diamond}>
          <div className={styles.text}>my <br /><span>CODING</span> journey</div>
        </Button>
        <div className={styles.smalldiamond} style={{ marginTop: "150px", marginLeft: "30px" }}></div>
        <Button tag={Link} to="/designlife" className={styles.diamond}>
          <div className={styles.text}>my <br /><span>DESIGN</span> journey</div>
        </Button>
      </div>
      <div className={styles.or}>OR</div>
      <Button tag={Link} to="/myprofile" className={styles.profile}>
        <div>my profile</div>
      </Button>
    </div>
  )
}

export default Mainpage
