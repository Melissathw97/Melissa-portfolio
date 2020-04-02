import React from 'react'
import styles from "./Coding.module.css"

const Coding = () => {
  return (
    <div className={`page ${styles.page}`}>
      <div className={styles.codingHeader}>
        <div className={styles.codingHeaderInner}>
          <div className={styles.codingHeaderBox}>
            <h1>My journey in <br /><span className={styles.codingSpan}>NEXT ACADEMY</span></h1>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit asperiores a similique consequatur delectus error velit esse ducimus voluptate iure rem suscipit animi, quam veniam. Ab, et rerum? Molestias, corporis.
      </div>
    </div>
  )
}

export default Coding;
