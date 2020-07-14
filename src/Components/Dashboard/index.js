import React, { useState } from 'react'
import styles from './dashboard.module.css'
import cx from 'classnames'
import Breadscrum from '../Breadcrumb'
import UserGraph from '../UserGraph'
import PerformanceGraph from '../PerformanceGraph'

function Dashboard() {
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.topWrapper}>
        <div>
          <Breadscrum />
          <div className={styles.heading}>Here's what's happening</div>
        </div>
        <span className={styles.calenderWrapper}>
          <i className={cx("fa fa-1x fa-calendar-o", styles.calenderIcon)}></i>
          <span className={styles.calenderText} > LAST 30 DAYS </span>
        </span>
      </div >
      <div className={styles.blockWrapper}>
        <div className={styles.firstBlock}>
          <div>
            <div className={styles.blockTitle}>TODAYS MONEY</div>
            <div className={styles.flexBox}>
              <div className={styles.blockDigit}>$24,000</div>
              <span className={styles.increasePercentage}>+4%</span>
            </div>
          </div>
          <div className={styles.textIcon}>$</div>
        </div>
        <div className={styles.firstBlock}>
          <div>
            <div className={styles.blockTitle}>NEW PROEJCTS</div>
            <div className={styles.secondBlockDigits}>
              <span className={styles.blockDigit}>12</span>
              <span className={styles.decreasePercentage}>+4%</span>
            </div>
          </div>
          <div className={styles.folderIcon}>
            <i className="fa fa-1x fa-folder-o"></i>
          </div>
        </div>
        <div className={styles.firstBlock}>
          <div>
            <div className={styles.blockTitle}>SYSTEM HEALTH</div>
            <div className={styles.thirdBlockDigits}>
              <span className={styles.blockDigit}>97%</span>
              <hr className={styles.progressBar} />
              <hr className={styles.grayProgressBar} />
            </div>
          </div>
        </div>
        <div className={styles.fourthBlock}>
          <div className={styles.roiBlock}>
            <div className={styles.blockFourTitle}>ROI PER CUSTOMER</div>
            <div className={styles.blockDigit}>$25.50</div>
          </div>
          <div className={styles.textIconInvert}>$</div>
        </div>
      </div>
      <div className={styles.graphTopWrapper}>
        <div className={styles.leftChart}>
          <div className={styles.userTopWrapper}>
            <div className={styles.userWrapper}>
              <div className={styles.userTitle}>
                Active users
              </div>
              <div className={styles.pageViewText}>
                Page views per second
              </div>
            </div>
            <div className={styles.userCount}>
              170
            </div>
          </div>
          <div className={styles.UserGraphContainer}>
            <UserGraph />
          </div>
          <div className={styles.graphLowerText}>
            <span>/app/projects</span>
            <span>24</span>
          </div>
          <div className={styles.graphLowerText}>
            <span>/app/chat</span>
            <span>21</span>
          </div>
          <div className={styles.graphLowerText}>
            <span>/cart</span>
            <span>15</span>
          </div>
          <div className={styles.graphLowerText}>
            <span>/cart/checkout</span>
            <span>8</span>
          </div>
          <div className={styles.seeAllWrapper}>
            <span className={styles.seeAllText} > SEE ALL </span>
            <i className={cx("fa fa-1x fa-angle-right", styles.calenderIcon)}></i>
          </div>
        </div>
        <div className={styles.rightChart}>
          <div className={styles.rightChartText}>
            <div>
              Performance Over Time
            </div>
            <i className={cx("fa fa-1x fa-ellipsis-v", styles.verticalMenu)}></i>
          </div>
          <div className={styles.performChartWrapper}>
            <PerformanceGraph />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
