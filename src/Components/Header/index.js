import React, { useState } from 'react'
import Logo from '../../Assets/logo.svg'
import styles from './header.module.css'
import cx from 'classnames'
import profileImage from '../../Assets/profile.jpeg'

export default function Header({ setShowNav, showNav }) {
  const [name] = useState("Madhav kabra")

  return (
    <div className={cx(styles.headerImage, { [styles.backDropShadow]: showNav })}>
      <span className={styles.logoImage}>
        <img className={styles.logo} src={Logo} alt='logo' />
        <i
          className={cx("fa fa-lg fa-bars", styles.mobileMenuIcon)}
          onClick={() => setShowNav(true)}
        ></i>
      </span>

      <span className={styles.iconWrapper}>
        <span className={styles.iconsBlock}>
          <i className={cx("fa fa-lg fa-search", styles.navIcons)}></i>
          <i className={cx("fa fa-lg fa-user-o", styles.navIcons)}></i>
          <i className={cx("fa fa-lg fa-bell-o", styles.navIcons)}></i>
          <i className={cx("fa fa-lg fa-cog", styles.navIcons)}></i>
        </span>
        <img className={styles.profileImage} src={profileImage} height="30px" width="30px" alt='Profile' />
        <span className={styles.userName}>{name}</span>
      </span>
    </div>
  )
}
