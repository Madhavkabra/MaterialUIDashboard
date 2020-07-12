import React, { useState } from 'react'
import styles from './collapsible.module.css'
import cx from 'classnames'
import navStyles from '../Navigation/navigation.module.css'

export default function Collapsible({ title, titleClass, list }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={navStyles.navBlock}>
      <div className={navStyles.navText} onClick={() => setOpen(!open)}>
        <i className={cx(titleClass, navStyles.navBarIcons)}></i>
        <span>{title}</span>
        <i className={!open ? cx("fa fa-lg fa-angle-down", styles.angle) : cx("fa fa-lg fa-angle-up", styles.angle)}></i>
      </div>
      <div className={open ? cx(styles.listBlock, styles.panelCollapse) : cx(styles.panelCollapse, styles.panelClose, styles.listBlock)}
      >
        {!!(list && list.length) &&
          list.map(item => {
            return (<div className={navStyles.navText}>
              {item}
            </div>)
          })
        }

      </div>
    </div>
  )
}
