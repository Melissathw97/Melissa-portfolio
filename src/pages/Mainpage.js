import React from 'react'
import styles from "./Mainpage.module.css"
import { NavLink as Link } from "react-router-dom"
import { Button } from "reactstrap"

const Mainpage = () => {
  return (
    <div className={styles.main}>
      <header>
        <h4>Welcome to</h4>
        <h2 className={styles.myName}>MELISSA</h2>
      </header>
      <p>What would you like to see?</p>
      <div className={styles.diamonds}>
        <Button tag={Link} to="/codinglife" className={styles.diamond}>
          <div className={styles.text}>my <br /><span>BIOTECH</span> journey</div>
        </Button>
        <div className={styles.smalldiamond} style={{ margin: "10px 15px" }}></div>
        <Button tag={Link} to="/codinglife" className={styles.diamond}>
          <div className={styles.text}>my <br /><span>CODING</span> journey</div>
        </Button>
        <div className={styles.smalldiamond} style={{ marginTop: "150px", marginLeft: "30px" }}></div>
        <Button tag={Link} to="/codinglife" className={styles.diamond}>
          <div className={styles.text}>my <br /><span>DESIGN</span> journey</div>
        </Button>
      </div>
    </div>
  )
}

export default Mainpage
