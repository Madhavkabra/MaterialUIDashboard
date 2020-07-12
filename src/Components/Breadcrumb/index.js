import React, { useState } from 'react'
import styles from './breadscrum.module.css'
import cx from 'classnames'

function Breadscrum({ props }) {
  return (
    <div>
      <span>Dashboard </span>
      <i
        className={cx("fa fa-angle-right",styles.angle)}
      ></i>
      <span> Reports</span>
    </div>
  )
}

export default Breadscrum