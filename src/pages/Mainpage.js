import React from 'react'
import logo from "../assets/images/Mlogo.png"
import styles from "./Mainpage.module.css"
import { NavLink as Link } from "react-router-dom"
import { Button } from "reactstrap"

const Mainpage = () => {
  return (
    <div className={styles.main}>
      <header>
        <h4>Welcome to</h4>
        <h2>MELISSA</h2>
      </header>
      <p>What would you like to see?</p>
      <div className={styles.diamonds}>
        <div className={styles.diamond}>
          <div className={styles.text}>my <br /><span>BIOTECH</span> journey</div>
        </div>
        <div className={styles.smalldiamond} style={{ margin: "10px 15px" }}></div>
        <Button tag={Link} to="/coding" className={styles.diamond}>
          <div className={styles.text}>my <br /><span>CODING</span> journey</div>
        </Button>
        <div className={styles.smalldiamond} style={{ marginTop: "150px", marginLeft: "30px" }}></div>
        <div className={styles.diamond}>
          <div className={styles.text}>my <br /><span>DESIGN</span> journey</div>
        </div>
      </div>
      {/* <img src={logo} className={styles.logo}></img> */}
    </div>
  )
}

export default Mainpage
