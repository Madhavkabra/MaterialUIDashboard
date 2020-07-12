import React from 'react'
import styles from './navigation.module.css'
import cx from 'classnames'

export default function Text({ title, iconClass, isUpdated }) {
  return (
    <div className={styles.navText}>
      <i className={cx(iconClass, styles.navBarIcons)}></i>
      {title}
      {isUpdated && <span className={styles.updateBox}>Updated</span>}
    </div>
  )
}