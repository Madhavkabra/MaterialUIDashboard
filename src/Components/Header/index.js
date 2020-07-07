import React, { useState } from 'react'
import Logo from '../../Assets/logo.svg'
import styles from './header.module.css'
import cx from 'classnames'
import profileImage from '../../Assets/profile.jpeg'

export default function Header() {
  const [name] = useState("Madhav kabra")
  return (
    <header className={styles.headerImage}>
      <span className={styles.logoImage}>
        <img className={styles.logo} src={Logo} alt='logo' />
        <i className={cx("fa fa-lg fa-bars", styles.mobileMenuIcon)}></i>
      </span>

      <span className={styles.iconWrapper}>
        <i className={cx("fa fa-lg fa-search", styles.navIcons)}></i>
        <i className={cx("fa fa-lg fa-user-o", styles.navIcons)}></i>
        <i className={cx("fa fa-lg fa-bell-o", styles.navIcons)}></i>
        <i className={cx("fa fa-lg fa-cog", styles.navIcons)}></i>
        <img className={styles.profileImage} src={profileImage} height="30px" width="30px" alt='Profile' />
        <span className={styles.userName}>{name}</span>
      </span>
    </header>
  )
}
