import React, { useState } from 'react'
import styles from './navigation.module.css'
import profileImage from '../../Assets/profile.jpeg'
import Collapsible from '../Collapsible'
import Text from './Text'
import cx from 'classnames'

export default function Navigation({ showNav }) {
  const [name] = useState("Madhav kabra")
  const [designation] = useState("Solution Engineer")
  return (
    <aside className={cx(styles.navWrapper,
     {[styles.mobileNavDisplay]: showNav},{[styles.mobileNavHide]: !showNav})
     }>
      <div className={styles.profileWrapper}>
        <img className={styles.profileImage} src={profileImage} height="60px" width="60px" alt='Profile' />
        <span className={styles.userName}>{name}</span>
        <span className={styles.designation}>{designation}</span>
      </div>
      <div className={styles.navBlocksWrapper}>
        <div className={styles.navBlock}>
          <div>Reports</div>
          <div className={styles.blockContent}>
            <Text title="Dashboard" iconClass="fa fa-lg fa-pie-chart" />
          </div>
        </div>
        <div className={styles.navBlock}>
          <div>Applications</div>
          <div className={styles.blockContent}>
            <Collapsible
              title="Project Platform"
              titleClass="fa fa-lg fa-suitcase"
              list={["Overview", "Browse Projects", "Create Project", "View Project"]}
            />
            <Text title="Mail" iconClass="fa fa-lg fa-envelope-o" isUpdated />
          </div>
        </div>
      </div>
      <div className={styles.navFooter}>
        <span> Need Help?</span>
        <div className={styles.footerText}>Check our docs</div>
      </div>
    </aside>
  )
}
